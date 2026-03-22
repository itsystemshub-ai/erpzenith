import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'

@Injectable()
export class ConfiguracionService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return this.prisma.configuracion.findMany()
  }

  async get(clave: string) {
    return this.prisma.configuracion.findUnique({ where: { clave } })
  }

  async set(clave: string, valor: string, descripcion?: string) {
    return this.prisma.configuracion.upsert({
      where: { clave },
      update: { valor, descripcion },
      create: { clave, valor, descripcion },
    })
  }

  async getTasaBCV() {
    const tasa = await this.prisma.tasaBCV.findFirst({ orderBy: { fecha: 'desc' } })
    return { tasa: tasa?.tasa ?? 36.5, fecha: tasa?.fecha }
  }

  async setTasaBCV(tasa: number) {
    return this.prisma.tasaBCV.create({ data: { tasa } })
  }

  async getRoles() {
    return this.prisma.role.findMany({
      include: {
        permissions: true,
        users: { select: { id: true } },
      },
    })
  }

  async updateRoleLevel(roleId: string, level: number) {
    // Obtener todos los permisos existentes
    const allPerms = await this.prisma.permission.findMany()

    // Filtrar según nivel: 1=read, 2=read+create+update, 3=todo
    const allowedActions: Record<number, string[]> = {
      1: ['read'],
      2: ['read', 'create', 'update'],
      3: ['read', 'create', 'update', 'delete', 'export'],
    }
    const actions = allowedActions[level] ?? allowedActions[2]
    const permsToAssign = allPerms.filter(p => actions.includes(p.action))

    return this.prisma.role.update({
      where: { id: roleId },
      data: { permissions: { set: permsToAssign.map(p => ({ id: p.id })) } },
      include: { permissions: true, users: { select: { id: true } } },
    })
  }

  async getAuditLogs() {
    // Placeholder — en producción usar un modelo AuditLog dedicado
    return []
  }

  getSistema() {
    const mem = process.memoryUsage()
    const usedMem = mem.heapUsed
    const totalMem = mem.heapTotal
    const ramPct = Math.round((usedMem / totalMem) * 100)
    const uptime = process.uptime()
    const uptimeHrs = Math.floor(uptime / 3600)
    const uptimeMins = Math.floor((uptime % 3600) / 60)
    return {
      ram: { used: Math.round(usedMem / 1024 / 1024), total: Math.round(totalMem / 1024 / 1024), pct: ramPct },
      uptime: { segundos: Math.round(uptime), texto: `${uptimeHrs}h ${uptimeMins}m` },
      nodeVersion: process.version,
      platform: process.platform,
    }
  }

  async getSesiones() {
    // Usuarios con actividad reciente (updatedAt en las últimas 24h)
    const hace24h = new Date(Date.now() - 24 * 60 * 60 * 1000)
    const usuarios = await this.prisma.user.findMany({
      where: { updatedAt: { gte: hace24h } },
      select: { id: true, username: true, updatedAt: true, roles: { select: { name: true } } },
      orderBy: { updatedAt: 'desc' },
    })
    return usuarios.map(u => ({
      id: u.id,
      user: u.username,
      role: u.roles[0]?.name ?? 'Sin rol',
      since: u.updatedAt,
    }))
  }

  async getSeguridad() {
    const totalUsers = await this.prisma.user.count()
    const activeUsers = await this.prisma.user.count({ where: { isActive: true } })
    const totalRoles = await this.prisma.role.count()
    const pendingResets = await this.prisma.passwordResetRequest.count({ where: { status: 'pending' } })
    return {
      totalUsers,
      activeUsers,
      totalRoles,
      pendingResets,
      scoreSeguridad: 87, // calculado estáticamente por ahora
    }
  }

  async getDbInfo() {
    // Tablas del schema con conteo real de filas
    const tables = [
      { name: 'empresas',               model: 'empresa' },
      { name: 'users',                  model: 'user' },
      { name: 'password_reset_requests',model: 'passwordResetRequest' },
      { name: 'roles',                  model: 'role' },
      { name: 'permissions',            model: 'permission' },
      { name: 'productos',              model: 'producto' },
      { name: 'stocks',                 model: 'stock' },
      { name: 'almacenes',              model: 'almacen' },
      { name: 'movimientos_stock',      model: 'movimientoStock' },
      { name: 'proveedores',            model: 'proveedor' },
      { name: 'ordenes_compra',         model: 'ordenCompra' },
      { name: 'items_orden_compra',     model: 'itemOrdenCompra' },
      { name: 'clientes',               model: 'cliente' },
      { name: 'facturas',               model: 'factura' },
      { name: 'items_factura',          model: 'itemFactura' },
      { name: 'empleados',              model: 'empleado' },
      { name: 'nominas',                model: 'nomina' },
      { name: 'ordenes_produccion',     model: 'ordenProduccion' },
      { name: 'items_orden_produccion', model: 'itemOrdenProduccion' },
      { name: 'configuracion',          model: 'configuracion' },
      { name: 'tasas_bcv',              model: 'tasaBCV' },
    ]

    const counts = await Promise.all(
      tables.map(async (t) => {
        try {
          const count = await (this.prisma as any)[t.model].count()
          return { table: t.name, rows: count }
        } catch {
          return { table: t.name, rows: 0 }
        }
      })
    )

    // Tamaño total de la BD
    const sizeResult = await this.prisma.$queryRaw<{ size: string }[]>`
      SELECT pg_size_pretty(pg_database_size(current_database())) AS size
    `
    // Conexiones activas
    const connResult = await this.prisma.$queryRaw<{ count: string }[]>`
      SELECT count(*) FROM pg_stat_activity WHERE state = 'active'
    `
    // Versión PostgreSQL
    const versionResult = await this.prisma.$queryRaw<{ version: string }[]>`
      SELECT version()
    `

    const totalRows = counts.reduce((acc, c) => acc + c.rows, 0)
    const pgVersion = (versionResult[0]?.version ?? '').match(/PostgreSQL (\d+\.\d+)/)?.[1] ?? 'PostgreSQL'

    return {
      tables: counts,
      totalTables: counts.length,
      totalRows,
      dbSize: sizeResult[0]?.size ?? 'N/A',
      activeConnections: parseInt(connResult[0]?.count ?? '0'),
      pgVersion: `PostgreSQL ${pgVersion}`,
    }
  }

  // Modelo Prisma por nombre de tabla
  private readonly TABLE_MODEL_MAP: Record<string, string> = {
    empresas: 'empresa',
    users: 'user',
    password_reset_requests: 'passwordResetRequest',
    roles: 'role',
    permissions: 'permission',
    productos: 'producto',
    stocks: 'stock',
    almacenes: 'almacen',
    movimientos_stock: 'movimientoStock',
    proveedores: 'proveedor',
    ordenes_compra: 'ordenCompra',
    items_orden_compra: 'itemOrdenCompra',
    clientes: 'cliente',
    facturas: 'factura',
    items_factura: 'itemFactura',
    empleados: 'empleado',
    nominas: 'nomina',
    ordenes_produccion: 'ordenProduccion',
    items_orden_produccion: 'itemOrdenProduccion',
    configuracion: 'configuracion',
    tasas_bcv: 'tasaBCV',
  }

  private allowedTable(tableName: string) {
    if (!this.TABLE_MODEL_MAP[tableName]) throw new Error('Tabla no permitida')
    return this.TABLE_MODEL_MAP[tableName]
  }

  async updateRow(tableName: string, id: string, data: Record<string, unknown>) {
    const model = this.allowedTable(tableName)
    // Eliminar campos que no se deben actualizar directamente
    const { id: _id, createdAt: _c, ...safeData } = data as any
    return (this.prisma as any)[model].update({ where: { id }, data: safeData })
  }

  async deleteRow(tableName: string, id: string) {
    const model = this.allowedTable(tableName)
    return (this.prisma as any)[model].delete({ where: { id } })
  }

  async getTableData(tableName: string, limit = 50) {
    this.allowedTable(tableName) // valida whitelist

    // Para users, devolver datos enriquecidos con roles, empresa y departamento
    if (tableName === 'users') {
      const ROLE_DEPT: Record<string, string> = {
        SUPERDEV: 'Sistema', ADMIN: 'Sistema',
        INVENTARIO: 'Operaciones', COMPRAS: 'Operaciones',
        PRODUCCION: 'Operaciones', CALIDAD: 'Operaciones',
        VENTAS: 'Comercial', RRHH: 'Administración',
        REPORTES: 'Herramientas', USER: 'Sistema',
      }
      const HIERARCHY = ['SUPERDEV','ADMIN','INVENTARIO','VENTAS','COMPRAS','RRHH','PRODUCCION','CALIDAD','REPORTES','USER']

      const users = await this.prisma.user.findMany({
        take: limit,
        orderBy: { createdAt: 'asc' },
        select: {
          id: true, name: true, username: true, password: true,
          empresaId: true, isActive: true, mfaEnabled: true, mfaSecret: true,
          passwordChangedAt: true, createdAt: true, updatedAt: true,
          roles: { select: { name: true } },
        },
      })
      return users.map(u => {
        const sortedRoles = [...u.roles].sort((a, b) => HIERARCHY.indexOf(a.name) - HIERARCHY.indexOf(b.name))
        const primaryRole = sortedRoles[0]?.name ?? 'USER'
        return {
          empresaId: u.empresaId,
          id: u.id,
          name: u.name,
          username: u.username,
          password: u.password,
          roles: u.roles.map(r => r.name).join(', '),
          departamento: ROLE_DEPT[primaryRole] ?? 'Sistema',
          isActive: u.isActive,
          mfaEnabled: u.mfaEnabled,
          mfaSecret: u.mfaSecret,
          passwordChangedAt: u.passwordChangedAt,
          createdAt: u.createdAt,
          updatedAt: u.updatedAt,
        }
      })
    }

    const rows = await this.prisma.$queryRawUnsafe(
      `SELECT * FROM "${tableName}" LIMIT ${limit}`
    )
    return rows
  }
}

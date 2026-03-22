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

  async getAuditLogs() {
    // Placeholder — en producción usar un modelo AuditLog dedicado
    return []
  }

  async getDbInfo() {
    // Tablas del schema con conteo real de filas
    const tables = [
      { name: 'users',                  model: 'user' },
      { name: 'roles',                  model: 'role' },
      { name: 'permissions',            model: 'permission' },
      { name: 'password_reset_requests',model: 'passwordResetRequest' },
      { name: 'productos',              model: 'producto' },
      { name: 'almacenes',              model: 'almacen' },
      { name: 'stocks',                 model: 'stock' },
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
      { name: 'empresas',               model: 'empresa' },
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

  async getTableData(tableName: string, limit = 50) {
    // Whitelist de tablas permitidas para evitar SQL injection
    const ALLOWED_TABLES = [
      'users', 'roles', 'permissions', 'password_reset_requests',
      'productos', 'almacenes', 'stocks', 'movimientos_stock',
      'proveedores', 'ordenes_compra', 'items_orden_compra',
      'clientes', 'facturas', 'items_factura',
      'empleados', 'nominas',
      'ordenes_produccion', 'items_orden_produccion',
      'configuracion', 'tasas_bcv', 'empresas',
    ]
    if (!ALLOWED_TABLES.includes(tableName)) {
      throw new Error('Tabla no permitida')
    }
    // $queryRawUnsafe es seguro aquí porque tableName está en whitelist
    const rows = await this.prisma.$queryRawUnsafe(
      `SELECT * FROM "${tableName}" LIMIT ${limit}`
    )
    return rows
  }
}

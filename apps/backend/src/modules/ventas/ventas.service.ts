import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'
import { CreateFacturaDto } from './dto/create-factura.dto'

@Injectable()
export class VentasService {
  constructor(private prisma: PrismaService) {}

  // ─── Facturas ────────────────────────────────────────────────────────────

  async findAllFacturas(estado?: string) {
    return this.prisma.factura.findMany({
      where: estado ? { estado } : {},
      include: { cliente: true },
      orderBy: { createdAt: 'desc' },
    })
  }

  async findFacturaById(id: string) {
    const factura = await this.prisma.factura.findUnique({
      where: { id },
      include: { cliente: true, items: true },
    })
    if (!factura) throw new NotFoundException('Factura no encontrada')
    return factura
  }

  async createFactura(dto: CreateFacturaDto) {
    const { items, ...facturaData } = dto
    const subtotal = items.reduce((sum, i) => sum + i.cantidad * i.precioVES, 0)
    const iva = subtotal * 0.16
    const total = subtotal + iva

    const tasa = await this.prisma.tasaBCV.findFirst({ orderBy: { fecha: 'desc' } })
    const tasaBCV = tasa?.tasa ?? 36.5
    const numero = `FAC-${Date.now()}`

    return this.prisma.factura.create({
      data: {
        numero,
        clienteId: dto.clienteId,
        subtotalVES: subtotal,
        ivaVES: iva,
        totalVES: total,
        totalUSD: total / Number(tasaBCV),
        tasaBCV,
        items: { create: items },
      },
      include: { cliente: true, items: true },
    })
  }

  async getResumen() {
    const [total, pendientes, pagadas] = await Promise.all([
      this.prisma.factura.aggregate({ _sum: { totalVES: true } }),
      this.prisma.factura.count({ where: { estado: 'PENDIENTE' } }),
      this.prisma.factura.count({ where: { estado: 'PAGADA' } }),
    ])
    return { totalVES: total._sum.totalVES, pendientes, pagadas }
  }

  // ─── Clientes ────────────────────────────────────────────────────────────

  async findAllClientes(search?: string) {
    return this.prisma.cliente.findMany({
      where: search
        ? {
            OR: [
              { nombre: { contains: search, mode: 'insensitive' } },
              { rif: { contains: search, mode: 'insensitive' } },
              { telefonoPersonal: { contains: search, mode: 'insensitive' } },
              { telefonoFijo: { contains: search, mode: 'insensitive' } },
              { direccion: { contains: search, mode: 'insensitive' } },
            ],
          }
        : {},
      orderBy: { nombre: 'asc' },
    })
  }
  async findClienteById(id: string) {
    const cliente = await this.prisma.cliente.findUnique({ where: { id } })
    if (!cliente) throw new NotFoundException('Cliente no encontrado')
    return cliente
  }

  async createCliente(data: { idcima?: string; rif?: string; nombre: string; region?: string; estado?: string; municipio?: string; personaContacto?: string; telefonoPersonal?: string; telefonoFijo?: string; direccion?: string; email?: string }) {
    return this.prisma.cliente.create({ data })
  }

  async updateCliente(id: string, data: Partial<{ idcima: string; rif: string; nombre: string; region: string; estado: string; municipio: string; personaContacto: string; telefonoPersonal: string; telefonoFijo: string; direccion: string; email: string; isActive: boolean }>) {
    await this.findClienteById(id)
    return this.prisma.cliente.update({ where: { id }, data })
  }

  async deleteCliente(id: string) {
    await this.findClienteById(id)
    await this.prisma.cliente.delete({ where: { id } })
    return { ok: true }
  }

  async bulkUpsertClientes(rows: Array<{ idcima?: string; rif?: string; nombre: string; region?: string; estado?: string; municipio?: string; personaContacto?: string; telefonoPersonal?: string; telefonoFijo?: string; direccion?: string; email?: string }>) {
    let created = 0
    let updated = 0
    const emptyCells: string[] = []
    for (const row of rows) {
      try {
        if (!row.rif) emptyCells.push(`${row.nombre}: sin RIF`)
        let existing: any = null
        if (row.idcima) existing = await this.prisma.cliente.findFirst({ where: { idcima: row.idcima } })
        if (!existing && row.rif) existing = await this.prisma.cliente.findFirst({ where: { rif: row.rif } })
        if (existing) {
          await this.prisma.cliente.update({ where: { id: existing.id }, data: row })
          updated++
        } else {
          await this.prisma.cliente.create({ data: row })
          created++
        }
      } catch { /* skip row on error */ }
    }
    return { ok: true, created, updated, emptyCells }
  }

  // ─── Vendedores ──────────────────────────────────────────────────────────

  async findAllVendedores(search?: string) {
    return this.prisma.vendedor.findMany({
      where: search
        ? {
            OR: [
              { nombre: { contains: search, mode: 'insensitive' } },
              { rif: { contains: search, mode: 'insensitive' } },
              { personaContacto: { contains: search, mode: 'insensitive' } },
              { ciudad: { contains: search, mode: 'insensitive' } },
            ],
          }
        : {},
      orderBy: { nombre: 'asc' },
    })
  }

  async findVendedorById(id: string) {
    const vendedor = await this.prisma.vendedor.findUnique({ where: { id } })
    if (!vendedor) throw new NotFoundException('Vendedor no encontrado')
    return vendedor
  }

  async createVendedor(data: { idcima?: string; rif?: string; nombre: string; region?: string; estado?: string; municipio?: string; personaContacto?: string; direccion?: string; telefonoPersonal?: string; telefonoFijo?: string; email?: string; ciudad?: string; notas?: string }) {
    return this.prisma.vendedor.create({ data })
  }

  async updateVendedor(id: string, data: Partial<{ idcima: string; rif: string; nombre: string; region: string; estado: string; municipio: string; personaContacto: string; direccion: string; telefonoPersonal: string; telefonoFijo: string; email: string; ciudad: string; notas: string; isActive: boolean }>) {
    await this.findVendedorById(id)
    return this.prisma.vendedor.update({ where: { id }, data })
  }

  async deleteVendedor(id: string) {
    await this.findVendedorById(id)
    await this.prisma.vendedor.delete({ where: { id } })
    return { ok: true }
  }

  async bulkUpsertVendedores(rows: Array<{ idcima?: string; rif?: string; nombre: string; region?: string; estado?: string; municipio?: string; personaContacto?: string; direccion?: string; telefonoPersonal?: string; telefonoFijo?: string; email?: string; ciudad?: string; notas?: string }>) {
    let created = 0
    let updated = 0
    const emptyCells: string[] = []
    for (const row of rows) {
      try {
        if (!row.rif) emptyCells.push(`${row.nombre}: sin RIF`)
        let existing: any = null
        if (row.idcima) existing = await this.prisma.vendedor.findFirst({ where: { idcima: row.idcima } })
        if (!existing && row.rif) existing = await this.prisma.vendedor.findFirst({ where: { rif: row.rif } })
        if (existing) {
          await this.prisma.vendedor.update({ where: { id: existing.id }, data: row })
          updated++
        } else {
          await this.prisma.vendedor.create({ data: row })
          created++
        }
      } catch { /* skip row on error */ }
    }
    return { ok: true, created, updated, emptyCells }
  }
}

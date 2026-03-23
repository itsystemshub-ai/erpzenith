import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'
import { CreateOrdenCompraDto } from './dto/create-orden-compra.dto'

@Injectable()
export class ComprasService {
  constructor(private prisma: PrismaService) {}

  async findAll(estado?: string) {
    return this.prisma.ordenCompra.findMany({
      where: estado ? { estado } : {},
      include: { proveedor: true },
      orderBy: { createdAt: 'desc' },
    })
  }

  async findById(id: string) {
    const oc = await this.prisma.ordenCompra.findUnique({
      where: { id },
      include: { proveedor: true, items: { include: { producto: true } } },
    })
    if (!oc) throw new NotFoundException('Orden de compra no encontrada')
    return oc
  }

  async create(dto: CreateOrdenCompraDto) {
    const { items, proveedorId } = dto
    const subtotal = items.reduce((sum, i) => sum + i.cantidad * i.precioUSD, 0)
    const iva = subtotal * 0.16
    const total = subtotal + iva

    const tasa = await this.prisma.tasaBCV.findFirst({ orderBy: { fecha: 'desc' } })
    const tasaBCV = tasa?.tasa ?? 36.5
    const numero = `OC-${Date.now()}`

    return this.prisma.ordenCompra.create({
      data: {
        numero,
        proveedorId,
        subtotalUSD: subtotal,
        ivaUSD: iva,
        totalUSD: total,
        tasaBCV,
        items: { create: items },
      },
      include: { proveedor: true, items: true },
    })
  }

  async aprobar(id: string) {
    return this.prisma.ordenCompra.update({ where: { id }, data: { estado: 'EMITIDA' } })
  }

  async rechazar(id: string) {
    return this.prisma.ordenCompra.update({ where: { id }, data: { estado: 'CANCELADA' } })
  }

  // ─── Proveedores ─────────────────────────────────────────────────────────

  async findAllProveedores(search?: string) {
    return this.prisma.proveedor.findMany({
      where: search ? {
        OR: [
          { nombre: { contains: search, mode: 'insensitive' } },
          { rif: { contains: search, mode: 'insensitive' } },
          { region: { contains: search, mode: 'insensitive' } },
          { municipio: { contains: search, mode: 'insensitive' } },
          { personaContacto: { contains: search, mode: 'insensitive' } },
        ],
      } : {},
      orderBy: { nombre: 'asc' },
    })
  }

  async createProveedor(data: { idcima?: string; rif?: string; nombre: string; region?: string; estado?: string; municipio?: string; personaContacto?: string; direccion?: string; telefonoPersonal?: string; telefonoFijo?: string; email?: string }) {
    if (data.rif) {
      const existing = await this.prisma.proveedor.findFirst({ where: { rif: data.rif } })
      if (existing) return this.prisma.proveedor.update({ where: { id: existing.id }, data })
    }
    return this.prisma.proveedor.create({ data })
  }

  async updateProveedor(id: string, data: Partial<{ idcima: string; rif: string; nombre: string; region: string; estado: string; municipio: string; personaContacto: string; direccion: string; telefonoPersonal: string; telefonoFijo: string; email: string; isActive: boolean }>) {
    return this.prisma.proveedor.update({ where: { id }, data })
  }

  async deleteProveedor(id: string) {
    await this.prisma.proveedor.delete({ where: { id } })
    return { ok: true }
  }

  async bulkUpsertProveedores(rows: Array<{ idcima?: string; rif?: string; nombre: string; region?: string; estado?: string; municipio?: string; personaContacto?: string; direccion?: string; telefonoPersonal?: string; telefonoFijo?: string; email?: string }>) {
    let created = 0
    let updated = 0
    const emptyCells: string[] = []
    for (const row of rows) {
      try {
        // Track empty critical fields
        if (!row.rif) emptyCells.push(`${row.nombre}: sin RIF`)
        let existing: any = null
        if (row.idcima) existing = await this.prisma.proveedor.findFirst({ where: { idcima: row.idcima } })
        if (!existing && row.rif) existing = await this.prisma.proveedor.findFirst({ where: { rif: row.rif } })
        const data = { ...row }
        if (existing) {
          await this.prisma.proveedor.update({ where: { id: existing.id }, data })
          updated++
        } else {
          await this.prisma.proveedor.create({ data })
          created++
        }
      } catch { /* skip row on error */ }
    }
    return { ok: true, created, updated, emptyCells }
  }
}

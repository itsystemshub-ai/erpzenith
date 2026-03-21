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
}

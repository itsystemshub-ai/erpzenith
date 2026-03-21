import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'
import { CreateFacturaDto } from './dto/create-factura.dto'

@Injectable()
export class VentasService {
  constructor(private prisma: PrismaService) {}

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
}

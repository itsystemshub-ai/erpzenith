import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'
import { CreateProductoDto } from './dto/create-producto.dto'

@Injectable()
export class InventarioService {
  constructor(private prisma: PrismaService) {}

  async findAllProductos(search?: string) {
    return this.prisma.producto.findMany({
      where: {
        isActive: true,
        ...(search && {
          OR: [
            { nombre: { contains: search, mode: 'insensitive' } },
            { sku: { contains: search, mode: 'insensitive' } },
          ],
        }),
      },
      include: { stocks: { include: { almacen: true } } },
      orderBy: { nombre: 'asc' },
    })
  }

  async findProductoById(id: string) {
    const producto = await this.prisma.producto.findUnique({
      where: { id },
      include: {
        stocks: { include: { almacen: true } },
        movimientos: { orderBy: { createdAt: 'desc' }, take: 20 },
      },
    })
    if (!producto) throw new NotFoundException('Producto no encontrado')
    return producto
  }

  async createProducto(dto: CreateProductoDto) {
    return this.prisma.producto.create({ data: dto })
  }

  async updateProducto(id: string, dto: Partial<CreateProductoDto>) {
    return this.prisma.producto.update({ where: { id }, data: dto })
  }

  async deleteProducto(id: string) {
    return this.prisma.producto.update({ where: { id }, data: { isActive: false } })
  }

  async getStockResumen() {
    const stocks = await this.prisma.stock.findMany({
      include: { producto: true, almacen: true },
    })
    const bajoStock = await this.prisma.producto.findMany({
      where: {
        isActive: true,
        stocks: { some: { cantidad: { lte: 10 } } },
      },
    })
    return { stocks, bajoStock: bajoStock.length }
  }

  async registrarMovimiento(productoId: string, tipo: string, cantidad: number, referencia?: string) {
    return this.prisma.movimientoStock.create({
      data: { productoId, tipo, cantidad, referencia },
    })
  }
}

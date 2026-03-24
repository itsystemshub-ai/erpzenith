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
            { nombre:      { contains: search, mode: 'insensitive' } },
            { sku:         { contains: search, mode: 'insensitive' } },
            { tipo:        { contains: search, mode: 'insensitive' } },
            { fabricante:  { contains: search, mode: 'insensitive' } },
            { marca:       { contains: search, mode: 'insensitive' } },
            { material:    { contains: search, mode: 'insensitive' } },
            { espesor:     { contains: search, mode: 'insensitive' } },
            { descripcion: { contains: search, mode: 'insensitive' } },
            { medidas:     { contains: search, mode: 'insensitive' } },
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

  async bulkUpsertProductos(rows: CreateProductoDto[]) {
    let created = 0
    let skipped = 0
    const errors: string[] = []

    const CHUNK = 50
    for (let i = 0; i < rows.length; i += CHUNK) {
      const chunk = rows.slice(i, i + CHUNK)
      await Promise.all(chunk.map(async (row) => {
        const sku = String(row.sku ?? '').trim()
        if (!sku) { skipped++; return }
        const data = {
          sku,
          tipo:        String(row.tipo        ?? '').trim() || null,
          fabricante:  String(row.fabricante  ?? '').trim() || null,
          marca:       String(row.marca       ?? '').trim() || null,
          material:    String(row.material    ?? '').trim() || null,
          espesor:     String(row.espesor     ?? '').trim() || null,
          nombre:      String(row.nombre      ?? '').trim() || 'Sin nombre',
          descripcion: String(row.descripcion ?? '').trim() || null,
          medidas:     String(row.medidas     ?? '').trim() || null,
          unidad:      String(row.unidad      ?? '').trim() || 'UND',
          precioUSD:   Number(row.precioUSD)  || 0,
          stockMin:    Number(row.stockMin)   || 0,
          isActive:    true,
        }
        try {
          await this.prisma.producto.create({ data })
          created++
        } catch (e) {
          errors.push(`SKU ${sku}: ${e}`)
          skipped++
        }
      }))
    }
    return { created, updated: 0, skipped, total: rows.length, errors: errors.slice(0, 10) }
  }

  async deleteAllProductos() {
    // Hard delete en cascada: stocks → movimientos → items → productos
    await this.prisma.stock.deleteMany({})
    await this.prisma.movimientoStock.deleteMany({})
    await this.prisma.itemOrdenCompra.deleteMany({})
    await this.prisma.itemOrdenProduccion.deleteMany({})
    const { count } = await this.prisma.producto.deleteMany({})
    return { deleted: count }
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

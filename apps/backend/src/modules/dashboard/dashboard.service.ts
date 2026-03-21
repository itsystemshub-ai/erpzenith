import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'

@Injectable()
export class DashboardService {
  constructor(private prisma: PrismaService) {}

  async getKpis() {
    const [
      ventasResumen,
      facturasCount,
      empleadosResumen,
      productosCount,
      stockBajo,
      ordenesCompra,
      tasa,
    ] = await Promise.all([
      this.prisma.factura.aggregate({
        _sum: { totalVES: true, totalUSD: true },
        where: { estado: { not: 'ANULADA' } },
      }),
      this.prisma.factura.groupBy({
        by: ['estado'],
        _count: { id: true },
        _sum: { totalVES: true },
      }),
      this.prisma.empleado.groupBy({
        by: ['estado'],
        _count: { id: true },
        where: { isActive: true },
      }),
      this.prisma.producto.count({ where: { isActive: true } }),
      this.prisma.producto.count({
        where: { isActive: true, stocks: { some: { cantidad: { lte: 10 } } } },
      }),
      this.prisma.ordenCompra.groupBy({
        by: ['estado'],
        _count: { id: true },
        _sum: { totalUSD: true },
      }),
      this.prisma.tasaBCV.findFirst({ orderBy: { fecha: 'desc' } }),
    ])

    const totalVentas = Number(ventasResumen._sum.totalVES ?? 0)
    const totalVentasUSD = Number(ventasResumen._sum.totalUSD ?? 0)

    const facturasPorEstado = Object.fromEntries(
      facturasCount.map((f) => [f.estado, { count: f._count.id, totalVES: Number(f._sum.totalVES ?? 0) }])
    )

    const empleadosPorEstado = Object.fromEntries(
      empleadosResumen.map((e) => [e.estado, e._count.id])
    )

    const comprasPorEstado = Object.fromEntries(
      ordenesCompra.map((o) => [o.estado, { count: o._count.id, totalUSD: Number(o._sum.totalUSD ?? 0) }])
    )

    const pendienteCobro = facturasPorEstado['PENDIENTE']?.totalVES ?? 0
    const vencidas = facturasPorEstado['VENCIDA']?.count ?? 0

    return {
      tasaBCV: Number(tasa?.tasa ?? 46.82),
      ventas: {
        totalVES: totalVentas,
        totalUSD: totalVentasUSD,
        porEstado: facturasPorEstado,
        pendienteCobroVES: pendienteCobro,
        facturasVencidas: vencidas,
      },
      inventario: {
        totalProductos: productosCount,
        stockBajo,
      },
      rrhh: {
        totalEmpleados: Object.values(empleadosPorEstado).reduce((a: number, b) => a + (b as number), 0),
        activos: empleadosPorEstado['ACTIVO'] ?? 0,
        vacaciones: empleadosPorEstado['VACACIONES'] ?? 0,
      },
      compras: {
        porEstado: comprasPorEstado,
      },
    }
  }

  async getCharts() {
    // Facturas agrupadas por mes (últimos 6 meses)
    const facturas = await this.prisma.factura.findMany({
      where: {
        estado: { not: 'ANULADA' },
        createdAt: { gte: new Date(Date.now() - 180 * 24 * 60 * 60 * 1000) },
      },
      select: { createdAt: true, totalVES: true, totalUSD: true, estado: true },
      orderBy: { createdAt: 'asc' },
    })

    // Agrupar por mes
    const porMes: Record<string, { ingresos: number; pendiente: number }> = {}
    for (const f of facturas) {
      const mes = f.createdAt.toISOString().slice(0, 7) // YYYY-MM
      if (!porMes[mes]) porMes[mes] = { ingresos: 0, pendiente: 0 }
      if (f.estado === 'PAGADA') porMes[mes].ingresos += Number(f.totalVES)
      else porMes[mes].pendiente += Number(f.totalVES)
    }

    const ventasMensuales = Object.entries(porMes).map(([mes, v]) => ({
      mes,
      ingresos: Math.round(v.ingresos),
      pendiente: Math.round(v.pendiente),
    }))

    // Top productos por valor de stock
    const stocks = await this.prisma.stock.findMany({
      include: { producto: true },
      orderBy: { cantidad: 'desc' },
      take: 5,
    })

    const topProductos = stocks.map((s) => ({
      nombre: s.producto.nombre,
      sku: s.producto.sku,
      stock: s.cantidad,
      valorUSD: s.cantidad * Number(s.producto.precioUSD),
    }))

    return { ventasMensuales, topProductos }
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ReportesService {
  constructor(private prisma: PrismaService) {}

  async getDashboardGeneral(period?: string) {
    const [ventas, compras, inventory, customers, employees] = await Promise.all([
      this.prisma.sale.aggregate({
        where: { status: 'INVOICED' },
        _sum: { total: true },
        _count: true,
      }),
      this.prisma.purchase.aggregate({
        _sum: { total: true },
        _count: true,
      }),
      this.prisma.product.aggregate({
        where: { isActive: true },
        _sum: { stock: true },
        _count: true,
      }),
      this.prisma.customer.count(),
      this.prisma.employee.count({ where: { isActive: true } }),
    ]);

    return {
      ventas: {
        total: ventas._sum.total || 0,
        count: ventas._count,
      },
      compras: {
        total: compras._sum.total || 0,
        count: compras._count,
      },
      inventory: {
        totalStock: inventory._sum.stock || 0,
        products: inventory._count,
      },
      customers: customers,
      employees: employees,
    };
  }

  async getVentasPorPeriodo(from: Date, to: Date) {
    const ventas = await this.prisma.sale.findMany({
      where: {
        status: 'INVOICED',
        date: { gte: from, lte: to },
      },
      include: {
        customer: true,
        items: true,
      },
      orderBy: { date: 'desc' },
    });

    const totalVentas = ventas.reduce((sum, v) => sum + v.total, 0);
    const totalImpuestos = ventas.reduce((sum, v) => sum + v.tax, 0);

    return {
      period: { from, to },
      ventas,
      resumen: {
        totalVentas,
        totalImpuestos,
        ventasNetas: totalVentas - totalImpuestos,
        count: ventas.length,
      },
    };
  }

  async getProductosMasVendidos(limit: number = 10) {
    const productos = await this.prisma.saleItem.groupBy({
      by: ['productId'],
      where: {
        sale: { status: 'INVOICED' },
      },
      _sum: {
        quantity: true,
        subtotal: true,
      },
      orderBy: {
        _sum: {
          quantity: 'desc',
        },
      },
      take: limit,
    });

    return Promise.all(
      productos.map(async p => {
        const product = await this.prisma.product.findUnique({
          where: { id: p.productId },
        });

        return {
          ...product,
          quantitySold: p._sum.quantity,
          totalRevenue: p._sum.subtotal,
        };
      })
    );
  }

  async getComprasPorProveedor(from: Date, to: Date) {
    const compras = await this.prisma.purchase.groupBy({
      by: ['supplierId'],
      where: {
        date: { gte: from, lte: to },
      },
      _sum: {
        total: true,
      },
      orderBy: {
        _sum: {
          total: 'desc',
        },
      },
    });

    return Promise.all(
      compras.map(async c => {
        const supplier = await this.prisma.supplier.findUnique({
          where: { id: c.supplierId },
        });

        return {
          supplier: supplier?.businessName,
          rif: supplier?.rif,
          totalCompras: c._sum.total || 0,
        };
      })
    );
  }

  async getKPIs() {
    const [ventasMes, comprasMes, stockBajo, clientesNuevos] = await Promise.all([
      this.prisma.sale.aggregate({
        where: {
          status: 'INVOICED',
          date: {
            gte: new Date(new Date().setMonth(new Date().getMonth() - 1)),
          },
        },
        _sum: { total: true },
      }),
      this.prisma.purchase.aggregate({
        where: {
          date: {
            gte: new Date(new Date().setMonth(new Date().getMonth() - 1)),
          },
        },
        _sum: { total: true },
      }),
      this.prisma.product.count({
        where: {
          isActive: true,
          stock: { lte: this.prisma.product.fields.minStock },
        },
      }),
      this.prisma.customer.count({
        where: {
          createdAt: {
            gte: new Date(new Date().setMonth(new Date().getMonth() - 1)),
          },
        },
      }),
    ]);

    return {
      ventasMes: ventasMes._sum.total || 0,
      comprasMes: comprasMes._sum.total || 0,
      stockBajo,
      clientesNuevos,
    };
  }
}

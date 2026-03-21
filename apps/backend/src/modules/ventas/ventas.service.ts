import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SaleStatus, PaymentStatus } from '@prisma/client';

interface CreateSaleDto {
  customerId: string;
  items: Array<{
    productId: string;
    quantity: number;
    price: number;
    taxRate: number;
  }>;
  paymentMethod?: string;
  dueDate?: Date;
}

interface FacturarVentaDto {
  paymentMethod?: string;
}

@Injectable()
export class VentasService {
  constructor(private prisma: PrismaService) {}

  // ───────────────────────────────────────────────────────────────────────────
  // OBTENER TODAS LAS VENTAS
  // ───────────────────────────────────────────────────────────────────────────
  
  async findAll(query?: any) {
    const where: any = {};
    
    if (query?.status) {
      where.status = query.status;
    }
    
    if (query?.customerId) {
      where.customerId = query.customerId;
    }

    return this.prisma.sale.findMany({
      where,
      include: {
        customer: true,
        items: {
          include: {
            product: true,
          },
        },
        seller: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
      orderBy: { date: 'desc' },
    });
  }

  // ───────────────────────────────────────────────────────────────────────────
  // OBTENER VENTA POR ID
  // ───────────────────────────────────────────────────────────────────────────
  
  async findOne(id: string) {
    const sale = await this.prisma.sale.findUnique({
      where: { id },
      include: {
        customer: true,
        items: {
          include: {
            product: true,
          },
        },
        seller: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    if (!sale) {
      throw new NotFoundException('Venta no encontrada');
    }

    return sale;
  }

  // ───────────────────────────────────────────────────────────────────────────
  // CREAR VENTA (BORRADOR)
  // ───────────────────────────────────────────────────────────────────────────
  
  async create(dto: CreateSaleDto, userId: string) {
    const number = await this.getNextSaleNumber();

    // 1. Validar productos y calcular totales
    let subtotal = 0;
    let tax = 0;

    for (const item of dto.items) {
      const product = await this.prisma.product.findUnique({
        where: { id: item.productId },
      });

      if (!product) {
        throw new NotFoundException(`Producto ${item.productId} no encontrado`);
      }

      const itemSubtotal = item.quantity * item.price;
      const itemTax = itemSubtotal * item.taxRate;

      subtotal += itemSubtotal;
      tax += itemTax;
    }

    const total = subtotal + tax;

    // 2. Crear venta en estado BORRADOR
    const sale = await this.prisma.sale.create({
      data: {
        number,
        customerId: dto.customerId,
        subtotal,
        tax,
        total,
        status: SaleStatus.DRAFT,
        paymentStatus: PaymentStatus.PENDING,
        sellerId: userId,
        paymentMethod: dto.paymentMethod,
        dueDate: dto.dueDate,
        items: {
          create: dto.items.map(item => {
            const itemSubtotal = item.quantity * item.price;
            const itemTax = itemSubtotal * item.taxRate;

            return {
              productId: item.productId,
              quantity: item.quantity,
              price: item.price,
              taxRate: item.taxRate,
              subtotal: itemSubtotal,
              taxAmount: itemTax,
              total: itemSubtotal + itemTax,
            };
          }),
        },
      },
      include: {
        items: { include: { product: true } },
        customer: true,
      },
    });

    return sale;
  }

  // ───────────────────────────────────────────────────────────────────────────
  // ACTUALIZAR VENTA
  // ───────────────────────────────────────────────────────────────────────────
  
  async update(id: string, dto: Partial<CreateSaleDto>, userId: string) {
    const sale = await this.prisma.sale.findUnique({
      where: { id },
    });

    if (!sale) {
      throw new NotFoundException('Venta no encontrada');
    }

    if (sale.status !== SaleStatus.DRAFT) {
      throw new BadRequestException('Solo se pueden editar ventas en borrador');
    }

    // Recalcular totales si hay items
    if (dto.items) {
      let subtotal = 0;
      let tax = 0;

      for (const item of dto.items) {
        const itemSubtotal = item.quantity * item.price;
        const itemTax = itemSubtotal * item.taxRate;

        subtotal += itemSubtotal;
        tax += itemTax;
      }

      const total = subtotal + tax;

      // Eliminar items existentes
      await this.prisma.saleItem.deleteMany({
        where: { saleId: id },
      });

      // Crear nuevos items
      await this.prisma.saleItem.createMany({
        data: dto.items.map(item => ({
          saleId: id,
          productId: item.productId,
          quantity: item.quantity,
          price: item.price,
          taxRate: item.taxRate,
          subtotal: item.quantity * item.price,
          taxAmount: item.quantity * item.price * item.taxRate,
          total: item.quantity * item.price * (1 + item.taxRate),
        })),
      });

      // Actualizar totales
      return this.prisma.sale.update({
        where: { id },
        data: {
          subtotal,
          tax,
          total,
          paymentMethod: dto.paymentMethod,
          dueDate: dto.dueDate,
        },
        include: {
          items: { include: { product: true } },
          customer: true,
        },
      });
    }

    return this.prisma.sale.update({
      where: { id },
      data: {
        paymentMethod: dto.paymentMethod,
        dueDate: dto.dueDate,
      },
      include: {
        items: { include: { product: true } },
        customer: true,
      },
    });
  }

  // ───────────────────────────────────────────────────────────────────────────
  // ELIMINAR VENTA
  // ───────────────────────────────────────────────────────────────────────────
  
  async remove(id: string) {
    const sale = await this.prisma.sale.findUnique({
      where: { id },
    });

    if (!sale) {
      throw new NotFoundException('Venta no encontrada');
    }

    if (sale.status !== SaleStatus.DRAFT) {
      throw new BadRequestException('Solo se pueden eliminar ventas en borrador');
    }

    await this.prisma.sale.delete({
      where: { id },
    });

    return { success: true, message: 'Venta eliminada correctamente' };
  }

  // ───────────────────────────────────────────────────────────────────────────
  // FACTURAR VENTA
  // ───────────────────────────────────────────────────────────────────────────
  
  async facturar(id: string, dto: FacturarVentaDto, userId: string) {
    const sale = await this.prisma.sale.findUnique({
      where: { id },
      include: {
        items: { include: { product: true } },
        customer: true,
      },
    });

    if (!sale) {
      throw new NotFoundException('Venta no encontrada');
    }

    if (sale.status !== SaleStatus.DRAFT && sale.status !== SaleStatus.CONFIRMED) {
      throw new BadRequestException('Solo se pueden facturar ventas en borrador o confirmadas');
    }

    // 1. Obtener configuración de empresa
    const company = await this.prisma.companyConfig.findFirst();
    if (!company) {
      throw new NotFoundException('Configuración de empresa no encontrada');
    }

    // 2. Generar número de factura
    const invoiceNumber = `${company.invoicePrefix}${company.invoiceSeries}-${company.nextInvoiceNum.toString().padStart(8, '0')}`;
    const invoiceControl = company.invoiceControl;

    // 3. Actualizar contadores
    await this.prisma.companyConfig.update({
      where: { id: company.id },
      data: {
        nextInvoiceNum: { increment: 1 },
        invoiceControl: this.getNextControlNumber(company.invoiceControl),
      },
    });

    // 4. Actualizar venta
    const updatedSale = await this.prisma.sale.update({
      where: { id },
      data: {
        status: SaleStatus.INVOICED,
        invoiceNumber,
        invoiceControl,
        paymentMethod: dto.paymentMethod || sale.paymentMethod,
        paymentStatus: dto.paymentMethod === 'CREDITO' ? PaymentStatus.PENDING : PaymentStatus.PAID,
        paidAt: dto.paymentMethod !== 'CREDITO' ? new Date() : null,
      },
      include: {
        items: { include: { product: true } },
        customer: true,
      },
    });

    // 5. Descontar inventario (se hará en un servicio separado)
    // await this.inventoryService.removeStock(...)

    // 6. Crear cuenta por cobrar si es crédito
    if (dto.paymentMethod === 'CREDITO') {
      await this.prisma.accountReceivable.create({
        data: {
          saleId: id,
          customerId: sale.customerId,
          originalAmount: sale.total,
          paidAmount: 0,
          balance: sale.total,
          dueDate: sale.dueDate!,
          status: 'PENDING',
        },
      });
    }

    return updatedSale;
  }

  // ───────────────────────────────────────────────────────────────────────────
  // CANCELAR VENTA
  // ───────────────────────────────────────────────────────────────────────────
  
  async cancelar(id: string, reason: string, userId: string) {
    const sale = await this.prisma.sale.findUnique({
      where: { id },
    });

    if (!sale) {
      throw new NotFoundException('Venta no encontrada');
    }

    if (sale.status === SaleStatus.CANCELLED) {
      throw new BadRequestException('La venta ya está cancelada');
    }

    await this.prisma.sale.update({
      where: { id },
      data: {
        status: SaleStatus.CANCELLED,
      },
    });

    return { success: true, message: 'Venta cancelada correctamente' };
  }

  // ───────────────────────────────────────────────────────────────────────────
  // OBTENER VENTAS POR PERÍODO
  // ───────────────────────────────────────────────────────────────────────────
  
  async getVentasPorPeriodo(from: Date, to: Date) {
    const ventas = await this.prisma.sale.findMany({
      where: {
        status: SaleStatus.INVOICED,
        date: {
          gte: from,
          lte: to,
        },
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

  // ───────────────────────────────────────────────────────────────────────────
  // OBTENER PRODUCTOS MÁS VENDIDOS
  // ───────────────────────────────────────────────────────────────────────────
  
  async getProductosMasVendidos(limit: number = 10, from?: Date, to?: Date) {
    const where: any = {
      sale: {
        status: SaleStatus.INVOICED,
      },
    };

    if (from && to) {
      where.sale.date = {
        gte: from,
        lte: to,
      };
    }

    const productos = await this.prisma.saleItem.groupBy({
      by: ['productId'],
      where,
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

  // ───────────────────────────────────────────────────────────────────────────
  // UTILIDADES
  // ───────────────────────────────────────────────────────────────────────────
  
  private async getNextSaleNumber(): Promise<string> {
    const year = new Date().getFullYear();
    const last = await this.prisma.sale.findFirst({
      where: { number: { startsWith: `V-${year}-` } },
      orderBy: { number: 'desc' },
    });
    const num = last ? parseInt(last.number.split('-')[2]) + 1 : 1;
    return `V-${year}-${num.toString().padStart(6, '0')}`;
  }

  private getNextControlNumber(control: string): string {
    const parts = control.split('-');
    const series = parts[0];
    const num = parseInt(parts[1]) + 1;
    return `${series}-${num.toString().padStart(8, '0')}`;
  }
}

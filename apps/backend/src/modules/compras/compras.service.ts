import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PurchaseStatus } from '@prisma/client';

interface CreateCompraDto {
  supplierId: string;
  items: Array<{
    productId: string;
    quantity: number;
    cost: number;
    taxRate?: number;
  }>;
  invoiceNumber?: string;
  dueDate?: Date;
}

@Injectable()
export class ComprasService {
  constructor(private prisma: PrismaService) {}

  async getCompras(query?: any) {
    const where: any = {};
    
    if (query?.status) {
      where.status = query.status;
    }
    
    if (query?.supplierId) {
      where.supplierId = query.supplierId;
    }

    return this.prisma.purchase.findMany({
      where,
      include: {
        supplier: true,
        items: { include: { product: true } },
      },
      orderBy: { date: 'desc' },
    });
  }

  async getCompra(id: string) {
    const compra = await this.prisma.purchase.findUnique({
      where: { id },
      include: {
        supplier: true,
        items: { include: { product: true } },
      },
    });

    if (!compra) {
      throw new NotFoundException('Compra no encontrada');
    }

    return compra;
  }

  async create(dto: CreateCompraDto, userId: string) {
    const number = await this.getNextCompraNumber();

    let subtotal = 0;
    let tax = 0;

    for (const item of dto.items) {
      const itemSubtotal = item.quantity * item.cost;
      const itemTax = itemSubtotal * (item.taxRate || 0.16);
      subtotal += itemSubtotal;
      tax += itemTax;
    }

    const total = subtotal + tax;

    const compra = await this.prisma.purchase.create({
      data: {
        number,
        supplierId: dto.supplierId,
        subtotal,
        tax,
        total,
        status: 'PENDING' as any,
        invoiceNumber: dto.invoiceNumber,
        dueDate: dto.dueDate,
        items: {
          create: dto.items.map(item => ({
            productId: item.productId,
            quantity: item.quantity,
            unitCost: item.cost,
            taxRate: item.taxRate || 0.16,
            subtotal: item.quantity * item.cost,
            taxAmount: item.quantity * item.cost * (item.taxRate || 0.16),
            total: item.quantity * item.cost * (1 + (item.taxRate || 0.16)),
          })) as any,
        },
      } as any,
      include: {
        items: { include: { product: true } },
        supplier: true,
      },
    });

    return compra;
  }

  async recibir(id: string, items: Array<{ productId: string; quantity: number }>, userId: string) {
    const compra = await this.prisma.purchase.findUnique({
      where: { id },
      include: { items: true },
    });

    if (!compra) {
      throw new NotFoundException('Compra no encontrada');
    }

    if (compra.status === (PurchaseStatus.RECEIVED as any)) {
      throw new BadRequestException('La compra ya fue recibida');
    }

    // Actualizar items recibidos
    for (const item of items) {
      const compraItem = compra.items.find(ci => ci.productId === item.productId);
      if (!compraItem) continue;

      await this.prisma.$executeRaw`
        UPDATE "PurchaseItem" 
        SET received = COALESCE(received, 0) + ${item.quantity}
        WHERE id = ${compraItem.id}
      `;

      // Actualizar stock del producto
      await this.prisma.product.update({
        where: { id: item.productId },
        data: {
          stock: { increment: item.quantity },
          cost: compraItem.unitCost,
        },
      });

      // Crear movimiento de inventario
      await this.prisma.inventoryMovement.create({
        data: {
          productId: item.productId,
          type: 'IN',
          quantity: item.quantity,
          unitCost: compraItem.unitCost,
          totalCost: item.quantity * compraItem.unitCost,
          reference: id,
          userId,
        },
      });
    }

    // Verificar si está completamente recibida
    const updatedCompra = await this.prisma.purchase.findUnique({
      where: { id },
      include: { items: true },
    });

    if (!updatedCompra) {
      throw new NotFoundException('Compra no encontrada');
    }

    const allReceived = updatedCompra.items.every((i: any) => (i.received || 0) >= i.quantity);

    await this.prisma.purchase.update({
      where: { id },
      data: {
        status: allReceived ? (PurchaseStatus.RECEIVED as any) : (PurchaseStatus.PENDING as any),
        receivedAt: allReceived ? new Date() : undefined,
      },
    });

    return { success: true, received: allReceived };
  }

  async cancelar(id: string) {
    const compra = await this.prisma.purchase.findUnique({
      where: { id },
    });

    if (!compra) {
      throw new NotFoundException('Compra no encontrada');
    }

    if (compra.status === (PurchaseStatus.RECEIVED as any)) {
      throw new BadRequestException('No se puede cancelar una compra recibida');
    }

    await this.prisma.purchase.update({
      where: { id },
      data: { status: PurchaseStatus.CANCELLED as any },
    });

    return { success: true };
  }

  async getComprasPorPeriodo(from: Date, to: Date) {
    const compras = await this.prisma.purchase.findMany({
      where: {
        date: { gte: from, lte: to },
      },
      include: {
        supplier: true,
        items: true,
      },
      orderBy: { date: 'desc' },
    });

    const totalCompras = compras.reduce((sum, c) => sum + c.total, 0);
    const totalImpuestos = compras.reduce((sum, c) => sum + c.tax, 0);

    return {
      period: { from, to },
      compras,
      resumen: {
        totalCompras,
        totalImpuestos,
        comprasNetas: totalCompras - totalImpuestos,
        count: compras.length,
      },
    };
  }

  private async getNextCompraNumber(): Promise<string> {
    const year = new Date().getFullYear();
    const last = await this.prisma.purchase.findFirst({
      where: { number: { startsWith: `C-${year}-` } },
      orderBy: { number: 'desc' },
    });
    const num = last ? parseInt(last.number.split('-')[2]) + 1 : 1;
    return `C-${year}-${num.toString().padStart(6, '0')}`;
  }
}

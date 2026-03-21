import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

interface CreateProductoDto {
  code: string;
  name: string;
  description?: string;
  categoryId?: string;
  price: number;
  cost: number;
  minStock?: number;
  valuationMethod?: string;
}

interface MovimientoDto {
  productId: string;
  warehouseId: string;
  type: string;
  quantity: number;
  reference?: string;
  notes?: string;
}

@Injectable()
export class InventarioService {
  constructor(private prisma: PrismaService) {}

  async getProductos(query?: any) {
    const where: any = { isActive: true };
    
    if (query?.categoryId) {
      where.categoryId = query.categoryId;
    }
    
    if (query?.search) {
      where.OR = [
        { name: { contains: query.search } },
        { code: { contains: query.search } },
      ];
    }

    return this.prisma.product.findMany({
      where,
      orderBy: { name: 'asc' },
    });
  }

  async getProducto(id: string) {
    const producto = await this.prisma.product.findUnique({
      where: { id },
    });

    if (!producto) {
      throw new NotFoundException('Producto no encontrado');
    }

    return producto;
  }

  async createProducto(dto: CreateProductoDto, userId: string) {
    const producto = await this.prisma.product.create({
      data: {
        code: dto.code,
        name: dto.name,
        description: dto.description,
        categoryId: dto.categoryId,
        price: dto.price,
        cost: dto.cost,
        stock: 0,
        minStock: dto.minStock || 0,
      } as any,
    });

    return producto;
  }

  async updateProducto(id: string, dto: Partial<CreateProductoDto>, userId: string) {
    const producto = await this.prisma.product.findUnique({
      where: { id },
    });

    if (!producto) {
      throw new NotFoundException('Producto no encontrado');
    }

    const updateData: any = {};
    if (dto.code !== undefined) updateData.code = dto.code;
    if (dto.name !== undefined) updateData.name = dto.name;
    if (dto.description !== undefined) updateData.description = dto.description;
    if (dto.categoryId !== undefined) updateData.categoryId = dto.categoryId;
    if (dto.price !== undefined) updateData.price = dto.price;
    if (dto.cost !== undefined) updateData.cost = dto.cost;
    if (dto.minStock !== undefined) updateData.minStock = dto.minStock;
    if (dto.valuationMethod !== undefined) updateData.valuationMethod = dto.valuationMethod as any;

    return this.prisma.product.update({
      where: { id },
      data: updateData,
    });
  }

  async deleteProducto(id: string) {
    await this.prisma.product.findUnique({
      where: { id },
    });

    await this.prisma.product.update({
      where: { id },
      data: { isActive: false },
    });

    return { success: true };
  }

  async getStock(warehouseId?: string) {
    const where: any = {};
    if (warehouseId) {
      where.warehouseId = warehouseId;
    }

    return this.prisma.warehouseStock.findMany({
      where,
      include: {
        product: true,
        warehouse: true,
      },
    });
  }

  async registrarMovimiento(dto: MovimientoDto, userId: string) {
    const producto = await this.prisma.product.findUnique({
      where: { id: dto.productId },
    });

    if (!producto) {
      throw new NotFoundException('Producto no encontrado');
    }

    // Validar stock para salidas
    if (dto.type === 'OUT' && producto.stock < dto.quantity) {
      throw new BadRequestException('Stock insuficiente');
    }

    // Crear movimiento
    const movimiento = await this.prisma.inventoryMovement.create({
      data: {
        productId: dto.productId,
        warehouseId: dto.warehouseId,
        type: dto.type as any,
        quantity: dto.type === 'OUT' ? -dto.quantity : dto.quantity,
        reference: dto.reference,
        userId,
      },
      include: { product: true, warehouse: true },
    });

    // Actualizar stock del producto
    await this.prisma.product.update({
      where: { id: dto.productId },
      data: {
        stock: { increment: dto.type === 'OUT' ? -dto.quantity : dto.quantity },
      },
    });

    // Actualizar stock del almacén
    if (dto.warehouseId) {
      await this.prisma.warehouseStock.upsert({
        where: {
          warehouseId_productId: {
            warehouseId: dto.warehouseId,
            productId: dto.productId,
          },
        },
        update: {
          quantity: { increment: dto.type === 'OUT' ? -dto.quantity : dto.quantity },
        },
        create: {
          warehouseId: dto.warehouseId,
          productId: dto.productId,
          quantity: dto.type === 'OUT' ? -dto.quantity : dto.quantity,
        },
      });
    }

    return movimiento;
  }

  async getStockBajo() {
    const productos = await this.prisma.product.findMany({
      where: {
        isActive: true,
      },
    });

    return productos
      .filter(p => p.stock <= (p.minStock || 0))
      .map(p => ({
        productId: p.id,
        code: p.code,
        name: p.name,
        currentStock: p.stock,
        minStock: p.minStock || 0,
        shortage: (p.minStock || 0) - p.stock,
      }));
  }

  async getValoracionInventario(warehouseId?: string) {
    const where: any = { isActive: true, stock: { gt: 0 } };

    const productos = await this.prisma.product.findMany({
      where,
    });

    const totalValue = productos.reduce((sum, p) => sum + p.stock * p.cost, 0);

    const byCategory = productos.reduce((acc, p) => {
      const cat = 'Sin categoría';
      if (!acc[cat]) acc[cat] = { quantity: 0, value: 0 };
      acc[cat].quantity += p.stock;
      acc[cat].value += p.stock * p.cost;
      return acc;
    }, {} as Record<string, { quantity: number; value: number }>);

    return {
      totalValue,
      totalItems: productos.length,
      byCategory,
      items: productos.map(p => ({
        productCode: p.code,
        productName: p.name,
        quantity: p.stock,
        unitCost: p.cost,
        totalValue: p.stock * p.cost,
      })),
    };
  }
}

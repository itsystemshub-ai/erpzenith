import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { PermissionsGuard } from '../../common/guards/permissions.guard';
import { RequirePermissions } from '../../common/decorators/permissions.decorator';
import { User } from '../../common/decorators/user.decorator';
import { InventarioService } from './inventario.service';

class CreateProductoDto {
  code: string;
  name: string;
  description?: string;
  categoryId?: string;
  price: number;
  cost: number;
  minStock?: number;
  valuationMethod?: string;
}

class MovimientoDto {
  productId: string;
  warehouseId: string;
  type: string;
  quantity: number;
  reference?: string;
  notes?: string;
}

@Controller('inventario')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class InventarioController {
  constructor(private inventarioService: InventarioService) {}

  @Get('productos')
  @RequirePermissions('inventario:read')
  async getProductos(@Query() query?: any) {
    return this.inventarioService.getProductos(query);
  }

  @Get('productos/:id')
  @RequirePermissions('inventario:read')
  async getProducto(@Param('id') id: string) {
    return this.inventarioService.getProducto(id);
  }

  @Post('productos')
  @RequirePermissions('inventario:create')
  async createProducto(@Body() dto: CreateProductoDto, @User() user: any) {
    return this.inventarioService.createProducto(dto, user.id);
  }

  @Put('productos/:id')
  @RequirePermissions('inventario:update')
  async updateProducto(
    @Param('id') id: string,
    @Body() dto: Partial<CreateProductoDto>,
    @User() user: any,
  ) {
    return this.inventarioService.updateProducto(id, dto, user.id);
  }

  @Delete('productos/:id')
  @RequirePermissions('inventario:delete')
  async deleteProducto(@Param('id') id: string) {
    return this.inventarioService.deleteProducto(id);
  }

  @Get('stock')
  @RequirePermissions('inventario:read')
  async getStock(@Query('warehouseId') warehouseId?: string) {
    return this.inventarioService.getStock(warehouseId);
  }

  @Post('movimientos')
  @RequirePermissions('inventario:create')
  async registrarMovimiento(@Body() dto: MovimientoDto, @User() user: any) {
    return this.inventarioService.registrarMovimiento(dto, user.id);
  }

  @Get('alertas/stock-bajo')
  @RequirePermissions('inventario:read')
  async getStockBajo() {
    return this.inventarioService.getStockBajo();
  }

  @Get('reportes/valoracion')
  @RequirePermissions('reportes-inventario:read')
  async getValoracionInventario(@Query('warehouseId') warehouseId?: string) {
    return this.inventarioService.getValoracionInventario(warehouseId);
  }
}

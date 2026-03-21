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
import { VentasService } from './ventas.service';

class CreateSaleDto {
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

class FacturarVentaDto {
  paymentMethod?: string;
}

@Controller('ventas')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class VentasController {
  constructor(private ventasService: VentasService) {}

  // ───────────────────────────────────────────────────────────────────────────
  // OBTENER TODAS LAS VENTAS
  // ───────────────────────────────────────────────────────────────────────────
  
  @Get()
  @RequirePermissions('ventas:read')
  async findAll(@Query() query?: any) {
    return this.ventasService.findAll(query);
  }

  // ───────────────────────────────────────────────────────────────────────────
  // OBTENER VENTA POR ID
  // ───────────────────────────────────────────────────────────────────────────
  
  @Get(':id')
  @RequirePermissions('ventas:read')
  async findOne(@Param('id') id: string) {
    return this.ventasService.findOne(id);
  }

  // ───────────────────────────────────────────────────────────────────────────
  // CREAR VENTA
  // ───────────────────────────────────────────────────────────────────────────
  
  @Post()
  @RequirePermissions('ventas:create')
  async create(@Body() dto: CreateSaleDto, @User() user: any) {
    return this.ventasService.create(dto, user.id);
  }

  // ───────────────────────────────────────────────────────────────────────────
  // ACTUALIZAR VENTA
  // ───────────────────────────────────────────────────────────────────────────
  
  @Put(':id')
  @RequirePermissions('ventas:update')
  async update(
    @Param('id') id: string,
    @Body() dto: Partial<CreateSaleDto>,
    @User() user: any,
  ) {
    return this.ventasService.update(id, dto, user.id);
  }

  // ───────────────────────────────────────────────────────────────────────────
  // ELIMINAR VENTA
  // ───────────────────────────────────────────────────────────────────────────
  
  @Delete(':id')
  @RequirePermissions('ventas:delete')
  async remove(@Param('id') id: string) {
    return this.ventasService.remove(id);
  }

  // ───────────────────────────────────────────────────────────────────────────
  // FACTURAR VENTA
  // ───────────────────────────────────────────────────────────────────────────
  
  @Post(':id/facturar')
  @RequirePermissions('ventas:create')
  async facturar(
    @Param('id') id: string,
    @Body() dto: FacturarVentaDto,
    @User() user: any,
  ) {
    return this.ventasService.facturar(id, dto, user.id);
  }

  // ───────────────────────────────────────────────────────────────────────────
  // CANCELAR VENTA
  // ───────────────────────────────────────────────────────────────────────────
  
  @Post(':id/cancelar')
  @RequirePermissions('ventas:delete')
  async cancelar(
    @Param('id') id: string,
    @Body() dto: { reason: string },
    @User() user: any,
  ) {
    return this.ventasService.cancelar(id, dto.reason, user.id);
  }

  // ───────────────────────────────────────────────────────────────────────────
  // VENTAS POR PERÍODO
  // ───────────────────────────────────────────────────────────────────────────
  
  @Get('reportes/ventas-periodo')
  @RequirePermissions('reportes-ventas:read')
  async getVentasPorPeriodo(
    @Query('from') from: string,
    @Query('to') to: string,
  ) {
    return this.ventasService.getVentasPorPeriodo(new Date(from), new Date(to));
  }

  // ───────────────────────────────────────────────────────────────────────────
  // PRODUCTOS MÁS VENDIDOS
  // ───────────────────────────────────────────────────────────────────────────
  
  @Get('reportes/productos-mas-vendidos')
  @RequirePermissions('reportes-ventas:read')
  async getProductosMasVendidos(
    @Query('limit') limit?: number,
    @Query('from') from?: string,
    @Query('to') to?: string,
  ) {
    return this.ventasService.getProductosMasVendidos(
      parseInt(limit?.toString() || '10'),
      from ? new Date(from) : undefined,
      to ? new Date(to) : undefined,
    );
  }
}

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
import { ComprasService } from './compras.service';

class CreateCompraDto {
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

@Controller('compras')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class ComprasController {
  constructor(private comprasService: ComprasService) {}

  @Get()
  @RequirePermissions('compras:read')
  async getCompras(@Query() query?: any) {
    return this.comprasService.getCompras(query);
  }

  @Get(':id')
  @RequirePermissions('compras:read')
  async getCompra(@Param('id') id: string) {
    return this.comprasService.getCompra(id);
  }

  @Post()
  @RequirePermissions('compras:create')
  async create(@Body() dto: CreateCompraDto, @User() user: any) {
    return this.comprasService.create(dto, user.id);
  }

  @Post(':id/recibir')
  @RequirePermissions('compras:update')
  async recibir(
    @Param('id') id: string,
    @Body() dto: { items: Array<{ productId: string; quantity: number }> },
    @User() user: any,
  ) {
    return this.comprasService.recibir(id, dto.items, user.id);
  }

  @Post(':id/cancelar')
  @RequirePermissions('compras:delete')
  async cancelar(@Param('id') id: string) {
    return this.comprasService.cancelar(id);
  }

  @Get('reportes/compras-periodo')
  @RequirePermissions('reportes-compras:read')
  async getComprasPorPeriodo(
    @Query('from') from: string,
    @Query('to') to: string,
  ) {
    return this.comprasService.getComprasPorPeriodo(new Date(from), new Date(to));
  }
}

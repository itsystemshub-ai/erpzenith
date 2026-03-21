import {
  Controller,
  Get,
  Query,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { PermissionsGuard } from '../../common/guards/permissions.guard';
import { RequirePermissions } from '../../common/decorators/permissions.decorator';
import { ReportesService } from './reportes.service';

@Controller('reportes')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class ReportesController {
  constructor(private reportesService: ReportesService) {}

  @Get('dashboard')
  @RequirePermissions('reportes:read')
  async getDashboardGeneral(@Query('period') period?: string) {
    return this.reportesService.getDashboardGeneral(period);
  }

  @Get('ventas-periodo')
  @RequirePermissions('reportes:read')
  async getVentasPorPeriodo(
    @Query('from') from: string,
    @Query('to') to: string,
  ) {
    return this.reportesService.getVentasPorPeriodo(new Date(from), new Date(to));
  }

  @Get('productos-mas-vendidos')
  @RequirePermissions('reportes:read')
  async getProductosMasVendidos(@Query('limit') limit?: number) {
    return this.reportesService.getProductosMasVendidos(parseInt(limit?.toString() || '10'));
  }

  @Get('compras-proveedor')
  @RequirePermissions('reportes:read')
  async getComprasPorProveedor(
    @Query('from') from: string,
    @Query('to') to: string,
  ) {
    return this.reportesService.getComprasPorProveedor(new Date(from), new Date(to));
  }

  @Get('kpis')
  @RequirePermissions('reportes:read')
  async getKPIs() {
    return this.reportesService.getKPIs();
  }
}

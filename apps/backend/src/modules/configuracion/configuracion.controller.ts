import { Controller, Get, Post, Put, Body, Param, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { PermissionsGuard } from '../../common/guards/permissions.guard';
import { RequirePermissions } from '../../common/decorators/permissions.decorator';
import { ConfiguracionService } from './configuracion.service';

@Controller('configuracion')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class ConfiguracionController {
  constructor(private service: ConfiguracionService) {}

  @Get('empresa')
  @RequirePermissions('configuracion-empresa:read')
  async getEmpresa() {
    return this.service.getEmpresa();
  }

  @Get('sistema')
  @RequirePermissions('configuracion-tablas:read')
  async getSistemaConfig(@Query('group') group?: string) {
    return this.service.getSistemaConfig(group);
  }

  @Get('tablas')
  @RequirePermissions('configuracion-tablas:read')
  async getTablas() {
    return this.service.getTablas();
  }
}

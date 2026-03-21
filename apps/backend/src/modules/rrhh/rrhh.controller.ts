import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Param,
  Query,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { PermissionsGuard } from '../../common/guards/permissions.guard';
import { RequirePermissions } from '../../common/decorators/permissions.decorator';
import { User } from '../../common/decorators/user.decorator';
import { RrhhService } from './rrhh.service';

class CreateEmpleadoDto {
  firstName: string;
  lastName: string;
  cedula: string;
  position?: string;
  salary?: number;
  departmentId?: string;
}

@Controller('rrhh')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class RrhhController {
  constructor(private rrhhService: RrhhService) {}

  @Get('empleados')
  @RequirePermissions('rrhh:read')
  async getEmpleados(@Query() query?: any) {
    return this.rrhhService.getEmpleados(query);
  }

  @Get('empleados/:id')
  @RequirePermissions('rrhh:read')
  async getEmpleado(@Param('id') id: string) {
    return this.rrhhService.getEmpleado(id);
  }

  @Post('empleados')
  @RequirePermissions('rrhh:create')
  async createEmpleado(@Body() dto: CreateEmpleadoDto, @User() user: any) {
    return this.rrhhService.createEmpleado(dto, user.id);
  }

  @Put('empleados/:id')
  @RequirePermissions('rrhh:update')
  async updateEmpleado(
    @Param('id') id: string,
    @Body() dto: Partial<CreateEmpleadoDto>,
    @User() user: any,
  ) {
    return this.rrhhService.updateEmpleado(id, dto, user.id);
  }

  @Get('departamentos')
  @RequirePermissions('rrhh:read')
  async getDepartamentos() {
    return this.rrhhService.getDepartamentos();
  }

  @Post('departamentos')
  @RequirePermissions('rrhh:create')
  async createDepartamento(@Body() dto: { name: string; description?: string }) {
    return this.rrhhService.createDepartamento(dto);
  }

  @Get('dashboard')
  @RequirePermissions('rrhh:read')
  async getDashboard() {
    return this.rrhhService.getDashboard();
  }
}

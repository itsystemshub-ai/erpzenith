import { Controller, Get, Post, Put, Patch, Delete, Body, Param, Query, UseGuards } from '@nestjs/common'
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger'
import { RrhhService } from './rrhh.service'
import { CreateEmpleadoDto } from './dto/create-empleado.dto'
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard'

@ApiTags('RRHH')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('rrhh')
export class RrhhController {
  constructor(private rrhhService: RrhhService) {}

  @Get('empleados')
  findAll(@Query('search') search?: string) {
    return this.rrhhService.findAll(search)
  }

  @Get('empleados/:id')
  findOne(@Param('id') id: string) {
    return this.rrhhService.findById(id)
  }

  @Post('empleados')
  create(@Body() dto: CreateEmpleadoDto) {
    return this.rrhhService.create(dto)
  }

  @Put('empleados/:id')
  update(@Param('id') id: string, @Body() dto: Partial<CreateEmpleadoDto>) {
    return this.rrhhService.update(id, dto)
  }

  @Patch('empleados/:id')
  patch(@Param('id') id: string, @Body() dto: Partial<CreateEmpleadoDto>) {
    return this.rrhhService.update(id, dto)
  }

  @Delete('empleados/:id')
  remove(@Param('id') id: string) {
    return this.rrhhService.remove(id)
  }

  @Post('nomina/calcular')
  calcularNomina(@Body('periodo') periodo: string) {
    return this.rrhhService.calcularNomina(periodo)
  }

  @Get('nomina/historial')
  getHistorialNomina(@Query('empleadoId') empleadoId?: string) {
    return this.rrhhService.getHistorialNomina(empleadoId)
  }

  @Get('resumen')
  getResumen() {
    return this.rrhhService.getResumen()
  }
}

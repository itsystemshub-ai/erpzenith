import { Controller, Get, Post, Patch, Delete, Param, Body, UseGuards } from '@nestjs/common'
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger'
import { EmpresasService } from './empresas.service'
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard'

@ApiTags('Empresas')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('empresas')
export class EmpresasController {
  constructor(private svc: EmpresasService) {}

  @Get()
  findAll() { return this.svc.findAll() }

  @Get('metricas')
  getMetricas() { return this.svc.getMetricas() }

  @Get('sistema')
  getSistema() { return this.svc.getSistema() }

  @Get(':id')
  findOne(@Param('id') id: string) { return this.svc.findOne(id) }

  @Post()
  create(@Body() body: any) { return this.svc.create(body) }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) { return this.svc.update(id, body) }

  @Delete(':id')
  remove(@Param('id') id: string) { return this.svc.remove(id) }
}

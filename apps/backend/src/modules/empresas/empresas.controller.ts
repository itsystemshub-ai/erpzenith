import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common'
import { EmpresasService } from './empresas.service'

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

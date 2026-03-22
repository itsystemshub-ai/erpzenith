import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common'
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger'
import { ConfiguracionService } from './configuracion.service'
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard'

@ApiTags('Configuracion')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('configuracion')
export class ConfiguracionController {
  constructor(private configuracionService: ConfiguracionService) {}

  @Get()
  getAll() {
    return this.configuracionService.getAll()
  }

  // Rutas específicas ANTES de :clave para evitar que el wildcard las capture
  @Get('bcv/tasa')
  getTasaBCV() {
    return this.configuracionService.getTasaBCV()
  }

  @Post('bcv/tasa')
  setTasaBCV(@Body('tasa') tasa: number) {
    return this.configuracionService.setTasaBCV(tasa)
  }

  @Get('sistema/roles')
  getRoles() {
    return this.configuracionService.getRoles()
  }

  @Get('auditoria')
  getAuditLogs() {
    return this.configuracionService.getAuditLogs()
  }

  @Get('db-info')
  getDbInfo() {
    return this.configuracionService.getDbInfo()
  }

  @Get('db-table/:table')
  getTableData(@Param('table') table: string) {
    return this.configuracionService.getTableData(table)
  }

  @Get(':clave')
  get(@Param('clave') clave: string) {
    return this.configuracionService.get(clave)
  }

  @Post()
  set(@Body() body: { clave: string; valor: string; descripcion?: string }) {
    return this.configuracionService.set(body.clave, body.valor, body.descripcion)
  }
}

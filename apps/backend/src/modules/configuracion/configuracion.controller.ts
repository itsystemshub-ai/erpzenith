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

  @Get(':clave')
  get(@Param('clave') clave: string) {
    return this.configuracionService.get(clave)
  }

  @Post()
  set(@Body() body: { clave: string; valor: string; descripcion?: string }) {
    return this.configuracionService.set(body.clave, body.valor, body.descripcion)
  }

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
}

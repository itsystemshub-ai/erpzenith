import { Controller, Get, Post, Body, Param, Query, UseGuards } from '@nestjs/common'
import { ApiTags, ApiBearerAuth, ApiQuery } from '@nestjs/swagger'
import { VentasService } from './ventas.service'
import { CreateFacturaDto } from './dto/create-factura.dto'
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard'

@ApiTags('Ventas')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('ventas')
export class VentasController {
  constructor(private ventasService: VentasService) {}

  @Get('facturas')
  @ApiQuery({ name: 'estado', required: false })
  findAll(@Query('estado') estado?: string) {
    return this.ventasService.findAllFacturas(estado)
  }

  @Get('facturas/:id')
  findOne(@Param('id') id: string) {
    return this.ventasService.findFacturaById(id)
  }

  @Post('facturas')
  create(@Body() dto: CreateFacturaDto) {
    return this.ventasService.createFactura(dto)
  }

  @Get('resumen')
  getResumen() {
    return this.ventasService.getResumen()
  }
}

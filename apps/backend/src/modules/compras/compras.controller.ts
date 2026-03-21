import { Controller, Get, Post, Patch, Body, Param, Query, UseGuards } from '@nestjs/common'
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger'
import { ComprasService } from './compras.service'
import { CreateOrdenCompraDto } from './dto/create-orden-compra.dto'
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard'

@ApiTags('Compras')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('compras')
export class ComprasController {
  constructor(private comprasService: ComprasService) {}

  @Get('ordenes')
  findAll(@Query('estado') estado?: string) {
    return this.comprasService.findAll(estado)
  }

  @Get('ordenes/:id')
  findOne(@Param('id') id: string) {
    return this.comprasService.findById(id)
  }

  @Post('ordenes')
  create(@Body() dto: CreateOrdenCompraDto) {
    return this.comprasService.create(dto)
  }

  @Patch('ordenes/:id/aprobar')
  aprobar(@Param('id') id: string) {
    return this.comprasService.aprobar(id)
  }

  @Patch('ordenes/:id/rechazar')
  rechazar(@Param('id') id: string) {
    return this.comprasService.rechazar(id)
  }
}

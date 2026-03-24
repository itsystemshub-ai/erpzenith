import { Controller, Get, Post, Patch, Delete, Body, Param, Query, UseGuards } from '@nestjs/common'
import { ApiTags, ApiBearerAuth, ApiQuery } from '@nestjs/swagger'
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

  // ─── Proveedores ─────────────────────────────────────────────────────────

  @Get('proveedores')
  @ApiQuery({ name: 'search', required: false })
  findAllProveedores(@Query('search') search?: string) {
    return this.comprasService.findAllProveedores(search)
  }

  @Post('proveedores/bulk')
  bulkUpsertProveedores(@Body() body: { rows: any[] }) {
    return this.comprasService.bulkUpsertProveedores(body.rows)
  }

  @Post('proveedores')
  createProveedor(@Body() body: any) {
    return this.comprasService.createProveedor(body)
  }

  @Patch('proveedores/:id')
  updateProveedor(@Param('id') id: string, @Body() body: any) {
    return this.comprasService.updateProveedor(id, body)
  }

  @Delete('proveedores')
  deleteAllProveedores() {
    return this.comprasService.deleteAllProveedores()
  }

  @Delete('proveedores/:id')
  deleteProveedor(@Param('id') id: string) {
    return this.comprasService.deleteProveedor(id)
  }
}

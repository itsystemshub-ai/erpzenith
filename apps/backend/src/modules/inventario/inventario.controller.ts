import { Controller, Get, Post, Put, Delete, Body, Param, Query, UseGuards } from '@nestjs/common'
import { ApiTags, ApiBearerAuth, ApiQuery } from '@nestjs/swagger'
import { InventarioService } from './inventario.service'
import { CreateProductoDto } from './dto/create-producto.dto'
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard'

@ApiTags('Inventario')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('inventario')
export class InventarioController {
  constructor(private inventarioService: InventarioService) {}

  @Get('productos')
  @ApiQuery({ name: 'search', required: false })
  findAll(@Query('search') search?: string) {
    return this.inventarioService.findAllProductos(search)
  }

  @Get('productos/:id')
  findOne(@Param('id') id: string) {
    return this.inventarioService.findProductoById(id)
  }

  @Post('productos/bulk')
  bulkUpsert(@Body() body: Record<string, unknown>) {
    const rows = (body.rows as Record<string, unknown>[]) ?? []
    return this.inventarioService.bulkUpsertProductos(rows as never)
  }

  @Post('productos')
  create(@Body() dto: CreateProductoDto) {
    return this.inventarioService.createProducto(dto)
  }

  @Put('productos/:id')
  update(@Param('id') id: string, @Body() dto: Partial<CreateProductoDto>) {
    return this.inventarioService.updateProducto(id, dto)
  }

  @Delete('productos/all')
  removeAll() {
    return this.inventarioService.deleteAllProductos()
  }

  @Delete('productos/:id')
  remove(@Param('id') id: string) {
    return this.inventarioService.deleteProducto(id)
  }

  @Get('stock/resumen')
  getStockResumen() {
    return this.inventarioService.getStockResumen()
  }
}

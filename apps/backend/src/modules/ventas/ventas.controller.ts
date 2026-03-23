import { Controller, Get, Post, Patch, Delete, Body, Param, Query, UseGuards } from '@nestjs/common'
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

  // ─── Facturas ────────────────────────────────────────────────────────────

  @Get('facturas')
  @ApiQuery({ name: 'estado', required: false })
  findAllFacturas(@Query('estado') estado?: string) {
    return this.ventasService.findAllFacturas(estado)
  }

  @Get('facturas/:id')
  findFactura(@Param('id') id: string) {
    return this.ventasService.findFacturaById(id)
  }

  @Post('facturas')
  createFactura(@Body() dto: CreateFacturaDto) {
    return this.ventasService.createFactura(dto)
  }

  @Get('resumen')
  getResumen() {
    return this.ventasService.getResumen()
  }

  // ─── Clientes ────────────────────────────────────────────────────────────

  @Get('clientes')
  @ApiQuery({ name: 'search', required: false })
  findAllClientes(@Query('search') search?: string) {
    return this.ventasService.findAllClientes(search)
  }

  @Post('clientes/bulk')
  bulkUpsertClientes(@Body() body: { rows: any[] }) {
    return this.ventasService.bulkUpsertClientes(body.rows)
  }

  @Get('clientes/:id')
  findCliente(@Param('id') id: string) {
    return this.ventasService.findClienteById(id)
  }

  @Post('clientes')
  createCliente(@Body() body: { rif?: string; nombre: string; telefono?: string; direccion?: string; email?: string }) {
    return this.ventasService.createCliente(body)
  }

  @Patch('clientes/:id')
  updateCliente(@Param('id') id: string, @Body() body: any) {
    return this.ventasService.updateCliente(id, body)
  }

  @Delete('clientes/:id')
  deleteCliente(@Param('id') id: string) {
    return this.ventasService.deleteCliente(id)
  }

  // ─── Vendedores ──────────────────────────────────────────────────────────

  @Get('vendedores')
  @ApiQuery({ name: 'search', required: false })
  findAllVendedores(@Query('search') search?: string) {
    return this.ventasService.findAllVendedores(search)
  }

  @Post('vendedores/bulk')
  bulkUpsertVendedores(@Body() body: { rows: any[] }) {
    return this.ventasService.bulkUpsertVendedores(body.rows)
  }

  @Get('vendedores/:id')
  findVendedor(@Param('id') id: string) {
    return this.ventasService.findVendedorById(id)
  }

  @Post('vendedores')
  createVendedor(@Body() body: { rif?: string; nombre: string; telefono?: string; ciudad?: string; contacto?: string; direccion?: string; notas?: string }) {
    return this.ventasService.createVendedor(body)
  }

  @Patch('vendedores/:id')
  updateVendedor(@Param('id') id: string, @Body() body: any) {
    return this.ventasService.updateVendedor(id, body)
  }

  @Delete('vendedores/:id')
  deleteVendedor(@Param('id') id: string) {
    return this.ventasService.deleteVendedor(id)
  }
}

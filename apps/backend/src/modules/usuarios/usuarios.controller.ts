import { Controller, Get, Post, Patch, Delete, Body, Param, UseGuards } from '@nestjs/common'
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger'
import { UsuariosService } from './usuarios.service'
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard'

@ApiTags('Usuarios')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('usuarios')
export class UsuariosController {
  constructor(private usuariosService: UsuariosService) {}

  @Get()
  findAll() { return this.usuariosService.findAll() }

  @Post()
  create(@Body() body: { name: string; username: string; password: string; roleIds: string[]; empresaId?: string }) {
    return this.usuariosService.create(body)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: {
    name?: string; username?: string; roleIds?: string[];
    empresaId?: string; isActive?: boolean; password?: string
  }) {
    return this.usuariosService.update(id, body)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuariosService.remove(id)
  }
}

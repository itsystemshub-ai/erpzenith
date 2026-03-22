import { Injectable, NotFoundException, ConflictException } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'
import * as bcrypt from 'bcryptjs'

@Injectable()
export class UsuariosService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.user.findMany({
      select: {
        id: true, name: true, username: true, isActive: true,
        createdAt: true, updatedAt: true,
        roles: { select: { id: true, name: true } },
        empresa: { select: { id: true, nombre: true, color: true, logo: true } },
      },
      orderBy: { createdAt: 'asc' },
    })
  }

  async create(data: { name: string; username: string; password: string; roleIds: string[]; empresaId?: string }) {
    const exists = await this.prisma.user.findUnique({ where: { username: data.username } })
    if (exists) throw new ConflictException('El usuario ya existe')
    const hashed = await bcrypt.hash(data.password, 12)
    return this.prisma.user.create({
      data: {
        name: data.name,
        username: data.username,
        password: hashed,
        roles: { connect: data.roleIds.map(id => ({ id })) },
        ...(data.empresaId ? { empresaId: data.empresaId } : {}),
      },
      select: {
        id: true, name: true, username: true, isActive: true, createdAt: true,
        roles: { select: { id: true, name: true } },
        empresa: { select: { id: true, nombre: true, color: true } },
      },
    })
  }

  async update(id: string, data: {
    name?: string; username?: string; roleIds?: string[];
    empresaId?: string; isActive?: boolean; password?: string
  }) {
    const user = await this.prisma.user.findUnique({ where: { id } })
    if (!user) throw new NotFoundException('Usuario no encontrado')

    if (data.username && data.username !== user.username) {
      const exists = await this.prisma.user.findUnique({ where: { username: data.username } })
      if (exists) throw new ConflictException('Ese nombre de usuario ya está en uso')
    }

    const { password, roleIds, ...rest } = data
    const updateData: any = { ...rest }
    if (password) updateData.password = await bcrypt.hash(password, 12)
    if (roleIds) updateData.roles = { set: roleIds.map(id => ({ id })) }

    return this.prisma.user.update({
      where: { id },
      data: updateData,
      select: {
        id: true, name: true, username: true, isActive: true, createdAt: true,
        roles: { select: { id: true, name: true } },
        empresa: { select: { id: true, nombre: true, color: true } },
      },
    })
  }

  async remove(id: string) {
    const user = await this.prisma.user.findUnique({ where: { id } })
    if (!user) throw new NotFoundException('Usuario no encontrado')
    if (user.username === 'superadminzenith') throw new ConflictException('No se puede eliminar el superadmin')
    await this.prisma.user.delete({ where: { id } })
    return { ok: true }
  }
}

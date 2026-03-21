import { Injectable, UnauthorizedException, ConflictException, NotFoundException, BadRequestException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { PrismaService } from '../../prisma/prisma.service'
import * as bcrypt from 'bcryptjs'
import { LoginDto } from './dto/login.dto'
import { RegisterDto } from './dto/register.dto'
import { ChangePasswordDto } from './dto/change-password.dto'
import { ForgotPasswordDto } from './dto/forgot-password.dto'

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
  ) {}

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { username: dto.username },
      include: { role: { include: { permissions: true } } },
    })
    if (!user || !user.isActive) throw new UnauthorizedException('Credenciales inválidas')

    const valid = await bcrypt.compare(dto.password, user.password)
    if (!valid) throw new UnauthorizedException('Credenciales inválidas')

    const payload = {
      sub: user.id,
      username: user.username,
      role: user.role.name,
      permissions: user.role.permissions.map((p) => `${p.module}:${p.action}`),
    }

    return {
      access_token: this.jwt.sign(payload),
      user: { id: user.id, name: user.name, username: user.username, role: user.role.name },
    }
  }

  async register(dto: RegisterDto) {
    const exists = await this.prisma.user.findUnique({ where: { username: dto.username } })
    if (exists) throw new ConflictException('El usuario ya está registrado')

    let role = await this.prisma.role.findUnique({ where: { name: 'USER' } })
    if (!role) {
      role = await this.prisma.role.create({ data: { name: 'USER' } })
    }

    const hashed = await bcrypt.hash(dto.password, 12)
    const user = await this.prisma.user.create({
      data: { username: dto.username, password: hashed, name: dto.name, roleId: role.id },
    })

    return { message: 'Usuario creado exitosamente', userId: user.id }
  }

  // Usuario solicita reset con su nueva contraseña propuesta → queda PENDIENTE
  async forgotPassword(dto: ForgotPasswordDto) {
    const user = await this.prisma.user.findUnique({ where: { username: dto.username } })
    if (!user) throw new NotFoundException('Usuario no encontrado')

    // Cancelar solicitudes pendientes anteriores del mismo usuario
    await this.prisma.passwordResetRequest.updateMany({
      where: { userId: user.id, status: 'PENDIENTE' },
      data: { status: 'CANCELADA' },
    })

    const hashed = await bcrypt.hash(dto.newPassword, 12)
    await this.prisma.passwordResetRequest.create({
      data: { userId: user.id, newPassword: hashed },
    })

    return { message: 'Solicitud enviada. El administrador revisará y aprobará el cambio.' }
  }

  // Admin: listar solicitudes pendientes
  async getResetRequests() {
    return this.prisma.passwordResetRequest.findMany({
      where: { status: 'PENDIENTE' },
      include: { user: { select: { id: true, name: true, username: true } } },
      orderBy: { createdAt: 'desc' },
    })
  }

  // Admin: aprobar solicitud
  async approveResetRequest(requestId: string, adminUsername: string) {
    const req = await this.prisma.passwordResetRequest.findUnique({ where: { id: requestId } })
    if (!req) throw new NotFoundException('Solicitud no encontrada')
    if (req.status !== 'PENDIENTE') throw new BadRequestException('La solicitud ya fue procesada')

    await this.prisma.user.update({
      where: { id: req.userId },
      data: { password: req.newPassword },
    })

    await this.prisma.passwordResetRequest.update({
      where: { id: requestId },
      data: { status: 'APROBADA', reviewedBy: adminUsername, reviewedAt: new Date() },
    })

    return { message: 'Contraseña actualizada correctamente' }
  }

  // Admin: rechazar solicitud
  async rejectResetRequest(requestId: string, adminUsername: string) {
    const req = await this.prisma.passwordResetRequest.findUnique({ where: { id: requestId } })
    if (!req) throw new NotFoundException('Solicitud no encontrada')
    if (req.status !== 'PENDIENTE') throw new BadRequestException('La solicitud ya fue procesada')

    await this.prisma.passwordResetRequest.update({
      where: { id: requestId },
      data: { status: 'RECHAZADA', reviewedBy: adminUsername, reviewedAt: new Date() },
    })

    return { message: 'Solicitud rechazada' }
  }

  async changePassword(userId: string, dto: ChangePasswordDto) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } })
    if (!user) throw new NotFoundException('Usuario no encontrado')

    const valid = await bcrypt.compare(dto.currentPassword, user.password)
    if (!valid) throw new UnauthorizedException('Contraseña actual incorrecta')

    const hashed = await bcrypt.hash(dto.newPassword, 12)
    await this.prisma.user.update({ where: { id: userId }, data: { password: hashed } })

    return { message: 'Contraseña actualizada correctamente' }
  }

  async getProfile(userId: string) {
    return this.prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, name: true, username: true, role: { select: { name: true } } },
    })
  }
}

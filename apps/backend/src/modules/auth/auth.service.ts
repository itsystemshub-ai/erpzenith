import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { PrismaService } from '../../prisma/prisma.service'
import * as bcrypt from 'bcryptjs'
import { LoginDto } from './dto/login.dto'
import { RegisterDto } from './dto/register.dto'

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
  ) {}

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
      include: { role: { include: { permissions: true } } },
    })
    if (!user || !user.isActive) throw new UnauthorizedException('Credenciales inválidas')

    const valid = await bcrypt.compare(dto.password, user.password)
    if (!valid) throw new UnauthorizedException('Credenciales inválidas')

    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role.name,
      permissions: user.role.permissions.map((p) => `${p.module}:${p.action}`),
    }

    return {
      access_token: this.jwt.sign(payload),
      user: { id: user.id, name: user.name, email: user.email, role: user.role.name },
    }
  }

  async register(dto: RegisterDto) {
    const exists = await this.prisma.user.findUnique({ where: { email: dto.email } })
    if (exists) throw new ConflictException('El email ya está registrado')

    let role = await this.prisma.role.findUnique({ where: { name: 'ADMIN' } })
    if (!role) {
      role = await this.prisma.role.create({ data: { name: 'ADMIN' } })
    }

    const hashed = await bcrypt.hash(dto.password, 12)
    const user = await this.prisma.user.create({
      data: { email: dto.email, password: hashed, name: dto.name, roleId: role.id },
    })

    return { message: 'Usuario creado exitosamente', userId: user.id }
  }

  async getProfile(userId: string) {
    return this.prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, name: true, email: true, role: { select: { name: true } } },
    })
  }
}

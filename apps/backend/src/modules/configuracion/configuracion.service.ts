import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'

@Injectable()
export class ConfiguracionService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return this.prisma.configuracion.findMany()
  }

  async get(clave: string) {
    return this.prisma.configuracion.findUnique({ where: { clave } })
  }

  async set(clave: string, valor: string, descripcion?: string) {
    return this.prisma.configuracion.upsert({
      where: { clave },
      update: { valor, descripcion },
      create: { clave, valor, descripcion },
    })
  }

  async getTasaBCV() {
    const tasa = await this.prisma.tasaBCV.findFirst({ orderBy: { fecha: 'desc' } })
    return { tasa: tasa?.tasa ?? 36.5, fecha: tasa?.fecha }
  }

  async setTasaBCV(tasa: number) {
    return this.prisma.tasaBCV.create({ data: { tasa } })
  }

  async getRoles() {
    return this.prisma.role.findMany({ include: { permissions: true } })
  }

  async getAuditLogs() {
    // Placeholder — en producción usar un modelo AuditLog dedicado
    return []
  }
}

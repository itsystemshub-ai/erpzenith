import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'

@Injectable()
export class EmpresasService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.empresa.findMany({ orderBy: { createdAt: 'asc' } })
  }

  async findOne(id: string) {
    const e = await this.prisma.empresa.findUnique({ where: { id } })
    if (!e) throw new NotFoundException('Empresa no encontrada')
    return e
  }

  create(data: { nombre: string; rif: string; email?: string; telefono?: string; direccion?: string; color?: string; logo?: string }) {
    return this.prisma.empresa.create({ data })
  }

  async update(id: string, data: Partial<{ nombre: string; rif: string; email: string; telefono: string; direccion: string; color: string; logo: string; isActive: boolean }>) {
    await this.findOne(id)
    return this.prisma.empresa.update({ where: { id }, data })
  }

  async remove(id: string) {
    await this.findOne(id)
    await this.prisma.empresa.delete({ where: { id } })
    return { ok: true }
  }

  async getMetricas() {
    const empresas = await this.prisma.empresa.findMany()
    const activas = empresas.filter(e => e.status === 'activo')
    const suspendidas = empresas.filter(e => e.status === 'suspendido')
    const trial = empresas.filter(e => e.status === 'trial')

    const mrrTotal = activas.reduce((s, e) => s + (e.mrr ?? 0), 0)
    const totalUsers = empresas.reduce((s, e) => s + (e.users ?? 0), 0)

    // Churn: suspendidas / total (si hay datos)
    const churnRate = empresas.length > 0
      ? ((suspendidas.length / empresas.length) * 100).toFixed(1)
      : '0.0'

    return {
      mrrTotal,
      totalTenants: empresas.length,
      activos: activas.length,
      suspendidos: suspendidas.length,
      trial: trial.length,
      totalUsers,
      churnRate: `${churnRate}%`,
    }
  }

  getSistema() {
    const mem = process.memoryUsage()
    const totalMem = mem.heapTotal
    const usedMem = mem.heapUsed
    const ramPct = Math.round((usedMem / totalMem) * 100)

    const uptime = process.uptime() // segundos
    const uptimeHrs = Math.floor(uptime / 3600)
    const uptimeMins = Math.floor((uptime % 3600) / 60)

    return {
      ram: { used: Math.round(usedMem / 1024 / 1024), total: Math.round(totalMem / 1024 / 1024), pct: ramPct },
      uptime: { segundos: Math.round(uptime), texto: `${uptimeHrs}h ${uptimeMins}m` },
      nodeVersion: process.version,
      platform: process.platform,
    }
  }
}

import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'

@Injectable()
export class GeoService {
  constructor(private prisma: PrismaService) {}

  getRegiones() {
    return this.prisma.geoRegion.findMany({ orderBy: { nombre: 'asc' } })
  }

  getEstados(regionId: string) {
    return this.prisma.geoEstado.findMany({ where: { regionId }, orderBy: { nombre: 'asc' } })
  }

  getAllEstados() {
    return this.prisma.geoEstado.findMany({ orderBy: { nombre: 'asc' } })
  }

  getMunicipios(estadoId: string) {
    return this.prisma.geoMunicipio.findMany({ where: { estadoId }, orderBy: { nombre: 'asc' } })
  }
}

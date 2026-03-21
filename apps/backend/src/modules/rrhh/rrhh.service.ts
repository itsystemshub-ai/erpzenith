import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'
import { CreateEmpleadoDto } from './dto/create-empleado.dto'

// Constantes LOTTT Venezuela
const IVSS_PCT = 0.04
const FAOV_PCT = 0.01
const INCES_PCT = 0.02

@Injectable()
export class RrhhService {
  constructor(private prisma: PrismaService) {}

  async findAll(search?: string) {
    return this.prisma.empleado.findMany({
      where: {
        isActive: true,
        ...(search && {
          OR: [
            { nombre: { contains: search, mode: 'insensitive' } },
            { apellido: { contains: search, mode: 'insensitive' } },
            { cargo: { contains: search, mode: 'insensitive' } },
          ],
        }),
      },
      orderBy: { nombre: 'asc' },
    })
  }

  async findById(id: string) {
    const emp = await this.prisma.empleado.findUnique({
      where: { id },
      include: { nominas: { orderBy: { createdAt: 'desc' }, take: 12 } },
    })
    if (!emp) throw new NotFoundException('Empleado no encontrado')
    return emp
  }

  async create(dto: CreateEmpleadoDto) {
    return this.prisma.empleado.create({ data: dto })
  }

  async update(id: string, dto: Partial<CreateEmpleadoDto>) {
    return this.prisma.empleado.update({ where: { id }, data: dto })
  }

  async calcularNomina(periodo: string) {
    const empleados = await this.prisma.empleado.findMany({ where: { isActive: true, estado: 'ACTIVO' } })
    const tasa = await this.prisma.tasaBCV.findFirst({ orderBy: { fecha: 'desc' } })
    const tasaBCV = Number(tasa?.tasa ?? 36.5)

    const nominas = await Promise.all(
      empleados.map(async (emp) => {
        const salario = Number(emp.salarioUSD)
        const ivss = salario * IVSS_PCT
        const faov = salario * FAOV_PCT
        const inces = salario * INCES_PCT
        const islr = salario > 1000 ? (salario - 1000) * 0.06 : 0
        const neto = salario - ivss - faov - inces - islr

        return this.prisma.nomina.create({
          data: {
            empleadoId: emp.id,
            periodo,
            salarioBruto: salario,
            ivss,
            faov,
            inces,
            islr,
            salarioNeto: neto,
            tasaBCV,
          },
        })
      })
    )

    return {
      periodo,
      empleadosProcesados: nominas.length,
      totalBruto: nominas.reduce((s, n) => s + Number(n.salarioBruto), 0),
      totalNeto: nominas.reduce((s, n) => s + Number(n.salarioNeto), 0),
    }
  }

  async getResumen() {
    const [total, activos, vacaciones] = await Promise.all([
      this.prisma.empleado.count({ where: { isActive: true } }),
      this.prisma.empleado.count({ where: { estado: 'ACTIVO' } }),
      this.prisma.empleado.count({ where: { estado: 'VACACIONES' } }),
    ])
    return { total, activos, vacaciones }
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

interface CreateEmpleadoDto {
  firstName: string;
  lastName: string;
  cedula: string;
  position?: string;
  salary?: number;
  departmentId?: string;
}

@Injectable()
export class RrhhService {
  constructor(private prisma: PrismaService) {}

  async getEmpleados(query?: any) {
    const where: any = { isActive: true };
    
    if (query?.departmentId) {
      where.departmentId = query.departmentId;
    }

    return this.prisma.employee.findMany({
      where,
      orderBy: { lastName: 'asc' },
    });
  }

  async getEmpleado(id: string) {
    const empleado = await this.prisma.employee.findUnique({
      where: { id },
      include: {
        contracts: {
          orderBy: { startDate: 'desc' },
          take: 1,
        },
      },
    });

    if (!empleado) {
      throw new NotFoundException('Empleado no encontrado');
    }

    return empleado;
  }

  async createEmpleado(dto: CreateEmpleadoDto, userId: string) {
    const data: any = {
      firstName: dto.firstName,
      lastName: dto.lastName,
      cedula: dto.cedula,
      isActive: true,
      hireDate: new Date(),
      salary: dto.salary || 0,
    };
    if (dto.position) data.position = dto.position;
    if (dto.departmentId) data.departmentId = dto.departmentId;

    return this.prisma.employee.create({ data });
  }

  async updateEmpleado(id: string, dto: Partial<CreateEmpleadoDto>, userId: string) {
    const empleado = await this.prisma.employee.findUnique({
      where: { id },
    });

    if (!empleado) {
      throw new NotFoundException('Empleado no encontrado');
    }

    const updateData: any = {};
    if (dto.firstName !== undefined) updateData.firstName = dto.firstName;
    if (dto.lastName !== undefined) updateData.lastName = dto.lastName;
    if (dto.position !== undefined) updateData.position = dto.position;
    if (dto.salary !== undefined) updateData.salary = dto.salary;
    if (dto.departmentId !== undefined) updateData.departmentId = dto.departmentId;

    return this.prisma.employee.update({
      where: { id },
      data: updateData,
    });
  }

  async getDashboard() {
    const [totalEmpleados, activos, departamentoCount] = await Promise.all([
      this.prisma.employee.count(),
      this.prisma.employee.count({ where: { isActive: true } }),
      this.prisma.department.count(),
    ]);

    return {
      totalEmpleados,
      activos,
      inactivos: totalEmpleados - activos,
      departamentoCount,
    };
  }

  async getDepartamentos() {
    return this.prisma.department.findMany({
      include: {
        _count: {
          select: { employees: true },
        },
      },
      orderBy: { name: 'asc' },
    });
  }

  async createDepartamento(dto: { name: string; description?: string }) {
    return this.prisma.department.create({
      data: {
        name: dto.name,
        description: dto.description,
      },
    });
  }
}

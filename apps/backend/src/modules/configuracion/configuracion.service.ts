import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ConfiguracionService {
  constructor(private prisma: PrismaService) {}

  async getEmpresa() {
    return this.prisma.companyConfig.findFirst();
  }

  async getSistemaConfig(group?: string) {
    const where = group ? { group } : {};
    return this.prisma.systemConfig.findMany({ where });
  }

  async getTablas() {
    return this.prisma.systemTable.findMany({
      include: {
        _count: { select: { items: true } },
      },
      orderBy: { name: 'asc' },
    });
  }
}

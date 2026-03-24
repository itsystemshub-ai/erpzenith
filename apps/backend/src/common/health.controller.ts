import { Controller, Get } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'

@Controller('api')
export class HealthController {
  constructor(private prisma: PrismaService) {}

  @Get('health')
  async getHealth() {
    try {
      await this.prisma.$queryRaw`SELECT 1`
      return {
        status: 'ok',
        database: 'connected',
        timestamp: new Date().toISOString(),
      }
    } catch (error) {
      return {
        status: 'error',
        database: 'disconnected',
        error: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString(),
      }
    }
  }
}

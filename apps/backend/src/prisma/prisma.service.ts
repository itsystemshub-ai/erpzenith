import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  // ─── Modelos con Soft Delete ────────────────────────────────────────────────
  private readonly modelsWithSoftDelete = [
    'user',
    'producto',
    'almacen',
    'proveedor',
    'vendedor',
    'cliente',
    'empleado',
    'empresa',
  ]

  async onModuleInit() {
    await this.$connect()
    this.setupSoftDeleteMiddleware()
    this.setupUpdatedAtMiddleware()
  }

  async onModuleDestroy() {
    await this.$disconnect()
  }

  // Enable explicit disconnect for serverless
  async onApplicationShutdown(signal?: string) {
    await this.$disconnect()
  }

  // ─── Middleware para Soft Delete ────────────────────────────────────────────
  private setupSoftDeleteMiddleware() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (this as any).$use(async (params: any, next: any) => {
      // Solo aplicar si el modelo tiene soft delete
      if (!this.modelsWithSoftDelete.includes(params.model)) {
        return next(params)
      }

      // Intercepta las operaciones de find
      if (['findUnique', 'findFirst', 'findMany'].includes(params.action)) {
        // Si ya hay un where con deletedAt, no modificar
        if (params.args?.where?.deletedAt !== undefined) {
          return next(params)
        }

        params.args = params.args || {}
        params.args.where = params.args.where || {}
        params.args.where.deletedAt = null

        // Asegurar que las relaciones también filtren por deletedAt
        if (params.args.include) {
          for (const relation of Object.keys(params.args.include)) {
            if (this.modelsWithSoftDelete.includes(relation)) {
              params.args.include[relation] = {
                where: { deletedAt: null },
                ...params.args.include[relation],
              }
            }
          }
        }
      }

      // Intercepta las operaciones de delete (soft delete)
      if (params.action === 'delete') {
        params.action = 'update'
        params.args = params.args || {}
        params.args.data = { deletedAt: new Date() }
      }

      // Intercepta deleteMany (soft delete)
      if (params.action === 'deleteMany') {
        params.action = 'updateMany'
        params.args = params.args || {}
        params.args.data = { deletedAt: new Date() }
      }

      return next(params)
    })
  }

  // ─── Middleware para actualizar updatedAt automáticamente ───────────────────
  private setupUpdatedAtMiddleware() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (this as any).$use(async (params: any, next: any) => {
      if (['update', 'updateMany'].includes(params.action)) {
        params.args = params.args || {}
        params.args.data = params.args.data || {}
        params.args.data.updatedAt = new Date()
      }
      return next(params)
    })
  }
}

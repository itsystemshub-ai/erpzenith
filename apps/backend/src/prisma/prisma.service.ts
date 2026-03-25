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

  constructor() {
    super({
      // Extend the Prisma Client with middleware
      query: {
        // Soft delete middleware
        $allModels: {
          async findUnique({ args, query }) {
            return await this.applySoftDeleteFilter('findUnique', args, query)
          },
          async findFirst({ args, query }) {
            return await this.applySoftDeleteFilter('findFirst', args, query)
          },
          async findMany({ args, query }) {
            return await this.applySoftDeleteFilter('findMany', args, query)
          },
          async delete({ args, query }) {
            return await this.applySoftDelete('delete', args, query)
          },
          async deleteMany({ args, query }) {
            return await this.applySoftDelete('deleteMany', args, query)
          },
        },
        // updatedAt middleware
        $allModels: {
          async update({ args, query }) {
            return await this.updateTimestamps('update', args, query)
          },
          async updateMany({ args, query }) {
            return await this.updateTimestamps('updateMany', args, query)
          },
        },
      },
    })
    
    // Apply the extensions
    // Note: The above query extensions are applied in the constructor
  }

  async onModuleInit() {
    await this.$connect()
  }

  async onModuleDestroy() {
    await this.$disconnect()
  }

  // Apply soft delete filter to find operations
  private async applySoftDeleteFilter(
    action: 'findUnique' | 'findFirst' | 'findMany',
    args: any,
    query: any
  ) {
    // Solo aplicar si el modelo tiene soft delete
    if (!this.modelsWithSoftDelete.includes(args?.model)) {
      return query(args)
    }

    // Si ya hay un where con deletedAt, no modificar
    if (args?.where?.deletedAt !== undefined) {
      return query(args)
    }

    // Filtrar por deletedAt = null
    args = {
      ...args,
      where: {
        ...args.where,
        deletedAt: null,
      },
    }

    // Asegurar que las relaciones también filtren por deletedAt
    if (args.include) {
      for (const relation of Object.keys(args.include)) {
        if (this.modelsWithSoftDelete.includes(relation)) {
          args.include[relation] = {
            ...args.include[relation],
            where: {
              ...args.include[relation].where,
              deletedAt: null,
            },
          }
        }
      }
    }

    return query(args)
  }

  // Apply soft delete (convert delete to update)
  private async applySoftDelete(
    action: 'delete' | 'deleteMany',
    args: any,
    query: any
  ) {
    // Solo aplicar si el modelo tiene soft delete
    if (!this.modelsWithSoftDelete.includes(args?.model)) {
      return query(args)
    }

    if (action === 'delete') {
      return query({
        ...args,
        action: 'update',
        data: {
          ...args.data,
          deletedAt: new Date(),
        },
      })
    } else if (action === 'deleteMany') {
      return query({
        ...args,
        action: 'updateMany',
        data: {
          ...args.data,
          deletedAt: new Date(),
        },
      })
    }

    return query(args)
  }

  // Update timestamps (updatedAt)
  private async updateTimestamps(
    action: 'update' | 'updateMany',
    args: any,
    query: any
  ) {
    if (['update', 'updateMany'].includes(action)) {
      return query({
        ...args,
        data: {
          ...args.data,
          updatedAt: new Date(),
        },
      })
    }
    return query(args)
  }
}

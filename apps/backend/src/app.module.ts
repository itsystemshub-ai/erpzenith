import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ThrottlerModule } from '@nestjs/throttler'
import { PrismaModule } from './prisma/prisma.module'
import { AuthModule } from './modules/auth/auth.module'
import { InventarioModule } from './modules/inventario/inventario.module'
import { ComprasModule } from './modules/compras/compras.module'
import { VentasModule } from './modules/ventas/ventas.module'
import { RrhhModule } from './modules/rrhh/rrhh.module'
import { ConfiguracionModule } from './modules/configuracion/configuracion.module'
import { DashboardModule } from './modules/dashboard/dashboard.module'
import { EmpresasModule } from './modules/empresas/empresas.module'
import { UsuariosModule } from './modules/usuarios/usuarios.module'
import { GeoModule } from './modules/geo/geo.module'
import { HealthController } from './common/health.controller'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ThrottlerModule.forRoot({
      throttlers: [{ ttl: 1000, limit: 10 }],
    }),
    PrismaModule,
    AuthModule,
    InventarioModule,
    ComprasModule,
    VentasModule,
    RrhhModule,
    ConfiguracionModule,
    DashboardModule,
    EmpresasModule,
    UsuariosModule,
    GeoModule,
  ],
  controllers: [HealthController],
})
export class AppModule {}

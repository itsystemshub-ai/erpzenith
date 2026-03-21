import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './modules/prisma/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { ConfiguracionModule } from './modules/configuracion/configuracion.module';
import { VentasModule } from './modules/ventas/ventas.module';
import { InventarioModule } from './modules/inventario/inventario.module';
import { ComprasModule } from './modules/compras/compras.module';
import { RrhhModule } from './modules/rrhh/rrhh.module';
import { ReportesModule } from './modules/reportes/reportes.module';


import { IaModule } from './modules/ia/ia.module';
import { SkillsModule } from './modules/skills/skills.module';

@Module({
  imports: [
    // ─────────────────────────────────────────────────────────────────────────
    // CONFIGURACIÓN GLOBAL
    // ─────────────────────────────────────────────────────────────────────────
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),

    // ─────────────────────────────────────────────────────────────────────────
    // BASE DE DATOS
    // ─────────────────────────────────────────────────────────────────────────
    PrismaModule,

    // ─────────────────────────────────────────────────────────────────────────
    // MÓDULOS BASE (00-shared)
    // ─────────────────────────────────────────────────────────────────────────
    AuthModule,

    // ─────────────────────────────────────────────────────────────────────────
    // CONFIGURACIÓN (05-configuracion)
    // ─────────────────────────────────────────────────────────────────────────
    ConfiguracionModule,

    // ─────────────────────────────────────────────────────────────────────────
    // OPERATIVO (02-operativo) - Módulos básicos funcionales
    // ─────────────────────────────────────────────────────────────────────────
    VentasModule,
    InventarioModule,
    ComprasModule,

    // ─────────────────────────────────────────────────────────────────────────
    // RECURSOS HUMANOS (01-administrativo/rrhh)
    // ─────────────────────────────────────────────────────────────────────────
    RrhhModule,

    // ─────────────────────────────────────────────────────────────────────────
    // REPORTES (06-reportes)
    // ─────────────────────────────────────────────────────────────────────────
    ReportesModule,

    // ─────────────────────────────────────────────────────────────────────────
    // INTEGRACIONES (07-integraciones)
    // ─────────────────────────────────────────────────────────────────────────
    IaModule,
    SkillsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

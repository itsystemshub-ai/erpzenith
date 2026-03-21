import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { IaService } from './ia.service';
import { IaController } from './ia.controller';

@Module({
  imports: [PrismaModule],
  controllers: [IaController],
  providers: [IaService],
  exports: [IaService],
})
export class IaModule {}

import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { RrhhService } from './rrhh.service';
import { RrhhController } from './rrhh.controller';

@Module({
  imports: [PrismaModule],
  controllers: [RrhhController],
  providers: [RrhhService],
  exports: [RrhhService],
})
export class RrhhModule {}

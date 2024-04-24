import { Module } from '@nestjs/common';
import { VuesService } from './vues.service';
import { VuesController } from './vues.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [VuesController],
  providers: [VuesService,PrismaService],
})
export class VuesModule {}

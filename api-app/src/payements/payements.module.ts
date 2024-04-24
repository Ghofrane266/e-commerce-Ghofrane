import { Module } from '@nestjs/common';
import { PayementsService } from './payements.service';
import { PayementsController } from './payements.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [PayementsController],
  providers: [PayementsService,PrismaService],
})
export class PayementsModule {}

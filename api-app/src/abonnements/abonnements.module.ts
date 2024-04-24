import { Module } from '@nestjs/common';
import { AbonnementsService } from './abonnements.service';
import { AbonnementsController } from './abonnements.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [AbonnementsController],
  providers: [AbonnementsService,PrismaService],
})
export class AbonnementsModule {}

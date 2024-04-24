import { Module } from '@nestjs/common';
import { CommentairesService } from './commentaires.service';
import { CommentairesController } from './commentaires.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [CommentairesController],
  providers: [CommentairesService,PrismaService],
})
export class CommentairesModule {}

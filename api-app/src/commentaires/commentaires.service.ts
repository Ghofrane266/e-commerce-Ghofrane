import { Injectable } from '@nestjs/common';
import { CreateCommentaireDto } from './dto/create-commentaire.dto';
import { UpdateCommentaireDto } from './dto/update-commentaire.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CommentairesService {
  constructor(private readonly prisma: PrismaService) { }

  async create(dto: CreateCommentaireDto) {
    return await this.prisma.commentaire.create({
      data:dto,
    })
  }

  findAll() {
    return this.prisma.commentaire.findMany({})

  }

  findOne(id: number) {
    return this.prisma.commentaire.findUnique({ where: { id } });;

  }

  update(id: number, updateCommentaireDto: UpdateCommentaireDto) {
    return this.prisma.commentaire.update({
      where: { id },
      data: updateCommentaireDto,
    });
  }

  remove(id: number) {
    return this.prisma.commentaire.delete({ where: { id } });

  }
}

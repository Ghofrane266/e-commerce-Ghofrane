import { Injectable } from '@nestjs/common';
import { CreateLikeDto } from './dto/create-like.dto';
import { UpdateLikeDto } from './dto/update-like.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LikesService {
  constructor(private readonly prisma: PrismaService) { }

 async create(dto: CreateLikeDto) {
    return await this.prisma.likes.create({
      data:dto,
    })
  }

  findAll() {
    return this.prisma.likes.findMany({})

  }

  findOne(id: number) {
    return this.prisma.likes.findUnique({ where: { id } });;

  }

  update(id: number, updateLikeDto: UpdateLikeDto) {
    return this.prisma.order.update({
      where: { id },
      data: updateLikeDto,
    });
  }

  remove(id: number) {
    return this.prisma.likes.delete({ where: { id } });

  }
}

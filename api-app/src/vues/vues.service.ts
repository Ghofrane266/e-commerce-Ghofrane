import { Injectable } from '@nestjs/common';
import { CreateVueDto } from './dto/create-vue.dto';
import { UpdateVueDto } from './dto/update-vue.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class VuesService {
  constructor(private readonly prisma: PrismaService) { }

 async create(dto: CreateVueDto) {
  return await this.prisma.vues.create({
    data:dto,
  })
  }

  findAll() {
    return this.prisma.vues.findMany({})

  }

  findOne(id: number) {
    return this.prisma.vues.findUnique({ where: { id } });;

  }

  update(id: number, updateVueDto: UpdateVueDto) {
    return this.prisma.vues.update({
      where: { id },
      data: updateVueDto,
    });
  }

  remove(id: number) {
    return this.prisma.vues.delete({ where: { id } });

  }
}

import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoriesService {
  constructor(private readonly prisma: PrismaService) { }

  async create(dto: CreateCategoryDto) {
    return await this.prisma.categorie.create({
      data:dto,
    })
  }

  findAll() {
    return this.prisma.categorie.findMany({})
    ;
  }

  findOne(id: number) {
    return this.prisma.categorie.findUnique({ where: { id } });;

  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return this.prisma.categorie.update({
      where: { id },
      data: updateCategoryDto,
    });
  }

  remove(id: number) {
    return this.prisma.categorie.delete({ where: { id } });

  }
}

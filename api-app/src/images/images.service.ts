import { Injectable } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ImagesService {
  constructor(private readonly prisma: PrismaService) { }

 async create(dto: CreateImageDto) {
  return await this.prisma.image.create({
    data: dto
      
      
    })
    
  }

  findAll() {
    return this.prisma.image.findMany({})
  }

  findOne(id: number) {
    return this.prisma.image.findUnique({ where: { id } });
  }

  update(id: number, updateImageDto: UpdateImageDto) {
    return this.prisma.image.update({
      where: { id },
      data: updateImageDto,
    });
  }

  remove(id: number) {
    return this.prisma.image.delete({ where: { id } });
  }
}

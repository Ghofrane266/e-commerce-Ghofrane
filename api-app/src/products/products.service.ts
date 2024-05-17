import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { dataProducts } from 'prisma/data';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) { }
  async create(dto: CreateProductDto) {


    return await this.prisma.product.create({
      data: dto
        
        
      })
      

    }

  findAll() {
    return this.prisma.product.findMany({
      include : {
        Images : true
      }
    })
  }

  findOne(id: number) {
    return this.prisma.product.findUnique({ where: { id:id },
      include : {
        Images : true
      } });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.prisma.product.update({
      where: { id },
      data: updateProductDto,
    });
  }

  remove(id: number) {
    return this.prisma.product.delete({ where: { id } });
  }
}

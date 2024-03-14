import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) { }

   async create(dto: CreateOrderDto) {
    return await this.prisma.order.create({
      data:dto,
    })
 
  }

  findAll() {
    return this.prisma.order.findMany({})
    
  }

  findOne(id: number) {
    return this.prisma.order.findUnique({ where: { id } });;
   
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return this.prisma.order.update({
      where: { id },
      data: updateOrderDto,
    });
  }

  remove(id: number) {
    return this.prisma.order.delete({ where: { id } });
    
  }
}
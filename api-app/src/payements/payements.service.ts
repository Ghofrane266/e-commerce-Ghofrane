import { Injectable } from '@nestjs/common';
import { CreatePayementDto } from './dto/create-payement.dto';
import { UpdatePayementDto } from './dto/update-payement.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PayementsService {
  constructor(private readonly prisma: PrismaService) { }

 async create(dto: CreatePayementDto) {
  return await this.prisma.payement.create({
    data:dto,
  })
  }

  findAll() {
    return this.prisma.payement.findMany({})

  }

  findOne(id: number) {
    return this.prisma.payement.findUnique({ where: { id } });;

  }

  update(id: number, updatePayementDto: UpdatePayementDto) {
    return this.prisma.payement.update({
      where: { id },
      data: updatePayementDto,
    });
  }

  remove(id: number) {
    return this.prisma.payement.delete({ where: { id } });

  }
}

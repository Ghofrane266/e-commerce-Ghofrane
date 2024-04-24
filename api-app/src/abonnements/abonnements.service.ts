import { Injectable } from '@nestjs/common';
import { CreateAbonnementDto } from './dto/create-abonnement.dto';
import { UpdateAbonnementDto } from './dto/update-abonnement.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AbonnementsService {
  constructor(private readonly prisma: PrismaService) { }

    async create(dto: CreateAbonnementDto) {
      return await this.prisma.abonnement.create({
        data:dto,
      })
  }

  findAll() {
    return this.prisma.abonnement.findMany({})
    
  }

  findOne(id: number) {
    return this.prisma.abonnement.findUnique({ where: { id } });;

  }

  update(id: number, updateAbonnementDto: UpdateAbonnementDto) {
    return this.prisma.abonnement.update({
      where: { id },
      data: updateAbonnementDto,
    });
  }

  remove(id: number) {
    return this.prisma.abonnement.delete({ where: { id } });

}
}
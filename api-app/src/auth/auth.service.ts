import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
constructor(private readonly prisma:PrismaService,private readonly jwtService:JwtService,){}
async login(dto:LoginDto){
    const user=await this.prisma.user.findUnique({
        where:{
            email: dto.email
        },
    });
    if (!user){
        throw new HttpException('invalid email',HttpStatus.BAD_REQUEST);

    }
    const {password,...rest}=user;
    if(await bcrypt.compare(dto.password,password)){
        const token =this.jwtService.sign(rest)
        return token;
    }else{
        throw new HttpException('invalid password',HttpStatus.BAD_REQUEST);
    }
}



}

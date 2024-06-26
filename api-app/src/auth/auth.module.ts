import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'ghofrane',
      signOptions: { expiresIn: '60m' },
    }),
  ],

  controllers: [AuthController],
  providers: [AuthService,PrismaService,JwtStrategy],
})
export class AuthModule {}

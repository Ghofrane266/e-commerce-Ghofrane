import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto, LoginDto } from './dto/create-auth.dto';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from './decorator/current-user';
import { JwtAuthGuard } from './jwt-auth.guard';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';

@ApiTags('AUTH')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('login')
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }
  @Post('signup')
  async signup(@Body() dto: CreateUserDto) {
    return this.authService.signup(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Post('update-me')
  updateMe(@Body() dto: UpdateAuthDto,@CurrentUser() user) {
    return this.authService.updateMe(dto,user.id);
  }

  @ApiSecurity('apiKey')
  @UseGuards(JwtAuthGuard)
  @Get('me')
  async findMe(@Request() req) {

    return await this.authService.getMyInfo(
      req.get('Authorization').replace('Bearer ', ''),
    );
  }
}

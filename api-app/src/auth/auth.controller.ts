import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto, LoginDto } from './dto/create-auth.dto';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from './decorator/current-user';
import { JwtAuthGuard } from './jwt-auth.guard';

@ApiTags('AUTH')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('login')
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
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

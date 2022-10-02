import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Public } from 'src/common/decorators/publicRoutes';
import { AuthService } from './auth.service';
import { LocalGuard } from './passport/auth.local.guard';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Public()
  @Post('login')
  @UseGuards(LocalGuard)
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}

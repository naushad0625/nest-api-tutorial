import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dtos';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signup(@Body() dto: AuthDto) {
    console.log(dto);

    return this.authService.signup();
  }

  @Post('signin')
  async signin() {
    return this.authService.signin();
  }

  @Post('signout')
  async signout() {
    return this.authService.signout();
  }
}

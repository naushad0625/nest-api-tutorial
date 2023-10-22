import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async signup() {
    return 'This is signup.';
  }

  async signin() {
    return 'This is signin.';
  }

  async signout() {
    return 'This is signout.';
  }
}

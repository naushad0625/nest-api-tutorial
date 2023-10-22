import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: { url: 'postgresql://user:123@localhost:5432/test?schema=public' },
      },
    });
  }
}

import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { ConfigService } from '@nestjs/config';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const { PrismaClient } = require('../../generated/prisma');

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnApplicationBootstrap
{
  constructor(config: ConfigService) {
    const url = config.get('DATABASE_URL');
    if (!url) {
      throw new Error('DATABASE_URL is not set');
    }
    super({
      adapter: new PrismaMariaDb(url),
    });

    this.$on('error', (e) => {
      console.error('Database Error: ', e);
    });
  }

  async onApplicationBootstrap() {
    await this.$connect();
  }
}

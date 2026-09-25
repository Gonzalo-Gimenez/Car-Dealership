import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const fallbackUrl =
  process.env.DATABASE_URL ?? "postgresql://127.0.0.1:5432/aurelia?schema=public";

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super({
      datasources: { db: { url: fallbackUrl } },
    });
  }

  async onModuleInit() {
    if (!process.env.DATABASE_URL) {
      return;
    }
    await this.$connect();
  }

  async onModuleDestroy() {
    if (!process.env.DATABASE_URL) {
      return;
    }
    await this.$disconnect();
  }
}

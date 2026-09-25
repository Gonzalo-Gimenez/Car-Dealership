import { Controller, Get, Query } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Controller('accessories')
export class AccessoriesController {
  constructor(private prisma: PrismaService) {}

  @Get()
  list(@Query('line') line?: string) {
    return this.prisma.accessory.findMany({
      where: line ? { line } : undefined,
    });
  }
}

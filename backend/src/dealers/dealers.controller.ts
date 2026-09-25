import { Controller, Get } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Controller('dealers')
export class DealersController {
  constructor(private prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.dealer.findMany({ orderBy: { city: 'asc' } });
  }
}

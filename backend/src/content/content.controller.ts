import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Controller('content')
export class ContentController {
  constructor(private prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.contentPage.findMany({ orderBy: { title: 'asc' } });
  }

  @Get(':slug')
  async one(@Param('slug') slug: string) {
    const p = await this.prisma.contentPage.findUnique({ where: { slug } });
    if (!p) throw new NotFoundException();
    return p;
  }
}

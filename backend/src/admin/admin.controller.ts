import {
  Controller,
  Get,
  Headers,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Controller('admin')
export class AdminController {
  constructor(private prisma: PrismaService) {}

  private check(token: string | undefined) {
    const expected = process.env.ADMIN_TOKEN || 'change-me';
    if (token !== expected) throw new UnauthorizedException();
  }

  @Get('leads')
  async leads(@Headers('x-admin-token') token?: string) {
    this.check(token);
    const [inquiries, appointments] = await Promise.all([
      this.prisma.inquiry.findMany({
        orderBy: { createdAt: 'desc' },
        take: 50,
        include: { model: true },
      }),
      this.prisma.appointment.findMany({
        orderBy: { createdAt: 'desc' },
        take: 50,
        include: { dealer: true },
      }),
    ]);
    return { inquiries, appointments };
  }
}

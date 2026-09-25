import { Body, Controller, Post } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Controller('inquiries')
export class InquiriesController {
  constructor(private prisma: PrismaService) {}

  @Post()
  create(
    @Body()
    body: {
      name: string;
      email: string;
      phone: string;
      message: string;
      modelId?: number;
    },
  ) {
    return this.prisma.inquiry.create({ data: body });
  }
}

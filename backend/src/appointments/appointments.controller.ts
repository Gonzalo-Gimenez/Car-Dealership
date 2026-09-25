import { Body, Controller, Post } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Controller('appointments')
export class AppointmentsController {
  constructor(private prisma: PrismaService) {}

  @Post()
  create(
    @Body()
    body: {
      dealerId: number;
      contactName: string;
      email: string;
      phone: string;
      serviceType: string;
      date: string;
    },
  ) {
    return this.prisma.appointment.create({
      data: {
        ...body,
        date: new Date(body.date),
      },
    });
  }
}

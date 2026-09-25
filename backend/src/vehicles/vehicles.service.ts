import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class VehiclesService {
  constructor(private prisma: PrismaService) {}

  findAll(bodyType?: string, certified?: boolean) {
    return this.prisma.vehicleModel.findMany({
      where: {
        ...(bodyType ? { bodyType } : {}),
        ...(certified !== undefined ? { certified } : {}),
      },
      orderBy: { name: 'asc' },
    });
  }

  async findOne(slug: string) {
    const v = await this.prisma.vehicleModel.findUnique({ where: { slug } });
    if (!v) throw new NotFoundException();
    return v;
  }
}

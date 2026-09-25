import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { AccessoriesModule } from './accessories/accessories.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { ContentModule } from './content/content.module';
import { DealersModule } from './dealers/dealers.module';
import { InquiriesModule } from './inquiries/inquiries.module';
import { PrismaModule } from './prisma/prisma.module';
import { VehiclesModule } from './vehicles/vehicles.module';

@Module({
  imports: [
    PrismaModule,
    VehiclesModule,
    DealersModule,
    InquiriesModule,
    AppointmentsModule,
    AccessoriesModule,
    ContentModule,
    AdminModule,
  ],
})
export class AppModule {}

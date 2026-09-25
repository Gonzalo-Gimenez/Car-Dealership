import { Module } from '@nestjs/common';
import { DealersController } from './dealers.controller';

@Module({ controllers: [DealersController] })
export class DealersModule {}

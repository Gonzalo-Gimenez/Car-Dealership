import { Module } from '@nestjs/common';
import { AccessoriesController } from './accessories.controller';

@Module({ controllers: [AccessoriesController] })
export class AccessoriesModule {}

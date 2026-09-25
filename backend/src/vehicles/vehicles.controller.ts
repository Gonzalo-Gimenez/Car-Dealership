import { Controller, Get, Param, Query } from '@nestjs/common';
import { VehiclesService } from './vehicles.service';

@Controller('vehicles')
export class VehiclesController {
  constructor(private readonly vehicles: VehiclesService) {}

  @Get()
  list(
    @Query('bodyType') bodyType?: string,
    @Query('certified') certified?: string,
  ) {
    const cert =
      certified === 'true' ? true : certified === 'false' ? false : undefined;
    return this.vehicles.findAll(bodyType, cert);
  }

  @Get(':slug')
  one(@Param('slug') slug: string) {
    return this.vehicles.findOne(slug);
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return process.env.DATABASE_URL
      ? "Aurelia API"
      : "Aurelia API (no DATABASE_URL)";
  }
}

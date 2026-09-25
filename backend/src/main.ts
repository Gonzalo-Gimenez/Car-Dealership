import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

function corsOrigin(origin: string | undefined, cb: (err: Error | null, allow?: boolean) => void) {
  if (!origin) {
    cb(null, true);
    return;
  }
  const extra = (process.env.CORS_ORIGIN ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const allowed = ["http://localhost:3001", ...extra];
  if (allowed.includes(origin) || origin.endsWith(".vercel.app")) {
    cb(null, true);
    return;
  }
  cb(null, false);
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: corsOrigin,
    credentials: true,
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

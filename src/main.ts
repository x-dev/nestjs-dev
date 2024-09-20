import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { XExceptionFilter } from './exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log'],
  });
  app.useGlobalFilters(new XExceptionFilter());
  app.enableCors();
  app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();

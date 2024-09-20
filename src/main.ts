import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { XExceptionFilter } from './exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new XExceptionFilter());
  await app.listen(3000);
}
bootstrap();

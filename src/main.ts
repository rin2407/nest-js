import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/exception/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // global validator
  app.useGlobalPipes(
    new ValidationPipe(),
  ); 
  // http exception filte
  app.useGlobalFilters(new HttpExceptionFilter()); 
  // global guard
  await app.listen(3000);
}
bootstrap();

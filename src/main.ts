import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LogDecoratorService } from './LogDecorator/LogDecorator.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    logger: new LogDecoratorService() // Creacion de nuestro logger
  });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  const PORT = process.env.PORT || 3000;
  await app.listen(PORT);
}
bootstrap();


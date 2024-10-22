// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(process.env.PORT ?? 3000);
// }
// bootstrap();

// src/main.ts

// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import { ValidationPipe } from '@nestjs/common';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
  
//   // Enable validation globally
//   app.useGlobalPipes(new ValidationPipe({
//     transform: true,
//     whitelist: true,
//     forbidNonWhitelisted: true,
//     exceptionFactory: (errors) => {
//       return new BadRequestException(errors);
//     },
//   }));
  
//   await app.listen(3000);
// }
// bootstrap();

// src/main.ts

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe,BadRequestException } from '@nestjs/common';
import { HttpExceptionFilter } from './filters/http-exceptional.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable validation globally
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true,
    exceptionFactory: (errors) => {
      return new BadRequestException(errors);
    },
  }));

  // Use exception filter globally
  app.useGlobalFilters(new HttpExceptionFilter());
 
  app.enableCors(); // Allow cross-origin requests
  
  await app.listen(3000);
}
bootstrap();

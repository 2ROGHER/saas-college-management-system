import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { envs } from './config';

async function bootstrap() {
  const logger = new Logger('Bootstrap'); // Create a logger instance for logging messages during the bootstrap process
  const app = await NestFactory.create(AppModule); // Create the NestJS application using the AppModule defined previously
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Remove any properties that are not defined in the DTO
      forbidNonWhitelisted: true, // Throw an error if any properties are not defined in the DTO
      // transform: true, // Uncomment this line if you want to automatically transform payloads to DTO instances
      transformOptions: {
        enableImplicitConversion: true, // Enable implicit conversion of types
      },
    }),
  );

  app.enableCors(); // Enable CORS for the application to allow requests from different origins (not recommended for production without proper configuration)
  await app.listen(envs.port ?? 8001);

  logger.log(`Application is running on port ${envs.port}`); // Log the URL where the application is running
}
bootstrap();

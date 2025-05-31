import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../src/modules/user/infrastructure/persistence/prisma/generated';

/**
 * This service is a placeholder for Prisma-related functionality.
 * It can be extended in the future to include methods for database operations,
 */
@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    await this.$connect(); // Connect to the database engine
  }

  // This method is called when the application is shutting down
  // async enableShutdownHooks(app: any) {
  //   this.$on('beforeExit', async () => {
  //     // Before the process exits
  //     await app.close(); // Close the NestJS application
  //   });
  // }

  // This method is called when the module is destroyed
  async onModuleDestroy() {
    await this.$disconnect(); // Disconnect from the database
  }
}

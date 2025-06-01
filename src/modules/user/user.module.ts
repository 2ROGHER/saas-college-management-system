import { Module } from '@nestjs/common';
import { PrismaModule } from 'prisma/prisma.module';
import { UserController } from './infrastructure/controllers/user.controller';
import { UserService } from './domain/services/user.service';
import { UserRepository } from './infrastructure/persistence/repositories';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [UserService, UserRepository],
  exports: [UserRepository, UserService],
  // This module can be extended in the future to include providers, controllers, or other modules related to user functionality
})
export class UserModule {}

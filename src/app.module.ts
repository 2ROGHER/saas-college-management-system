import { Module } from '@nestjs/common';
import { PrismaModule } from 'prisma/prisma.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    // Import  all modules
    PrismaModule.forRoot(), // Import the Prisma module with its configuration

    // Import all controllers
    UserModule

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

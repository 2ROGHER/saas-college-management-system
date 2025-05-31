import { Global, Module } from "@nestjs/common";
import { PrismaService } from "./prisma.service";

/**
 * This class module is used to encapsulate Prisma-related functionality.
 * It can be extended in the future to include providers, controllers, or other modules related to Prisma.
 */
 @Global()
@Module({})
export class PrismaModule {
    static forRoot() {
        return {
            module: PrismaModule, // The module itself
            imports: [], // Other modules can be imported here if needed
            providers: [PrismaService], // Providers can be added here if needed
            exports: [PrismaService], // Exported providers can be added here
            controllers: [], // Controllers can be added here if needed
            global: true, // This makes the module global, so it can be used across the application without needing to import it in every module
        }
    }
}
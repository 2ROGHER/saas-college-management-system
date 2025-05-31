import * as joi from 'joi';
import 'dotenv/config';

export interface EnvVars { 
    NODE_ENV: string; // The environment in which the application is running (development, production, test)
    PORT: number;
    DB_HOST?: string;
    DB_PORT?: number;
    DB_USER?: string;
    DB_PASSWORD?: string;
    DB_NAME?: string;
    DB_URL?: string;
    DATABASE_URL: string;
};



// Create a Schema for validating environment variables using Joi
const envVarSchema = joi.object<EnvVars>({
    NODE_ENV: joi.string().valid('development', 'production', 'test').default('development'),
    PORT: joi.number().default(8001), // Default port for the API Gateway
    // Add more environment variables as needed
    // for example database connection strings, API keys, etc.
    DATABASE_URL: joi.string().required()
})
.unknown(true); // Allow unknown variables to be present in the environment


// Validate the environment variables against the schema
const { error, value } = envVarSchema.validate(process.env); // Validate the environment variables against the schema

if (error) {
    throw new Error(`Config validation error: ${error.message}`); // Throw an error if validation fails
}

// Cast the validated value to the EnvVars type
const envVars = value as EnvVars; // Cast the validated value to the EnvVars type

// Export the validated environment variables
export const envs = {
    env: envVars.NODE_ENV,
    port: envVars.PORT, // Export the validated environment variables
    // TODO("Add more environment variables as needed"),
    databaseUrl: envVars.DATABASE_URL
};




import { Logger } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, validateSync } from 'class-validator';
import process from 'process';

enum Environment {
  Development = 'development',
  Production = 'production',
  Test = 'test',
  Provision = 'provision',
}

class EnvironmentVariables {
  @IsEnum(Environment)
  NODE_ENV: Environment;

  @IsNumber()
  @IsOptional()
  PORT: number;

  @IsString()
  @IsNotEmpty()
  DB_USERNAME: string;

  @IsString()
  @IsNotEmpty()
  DB_PASSWORD: string;

  @IsString()
  @IsNotEmpty()
  DB_NAME: string;

  @IsString()
  @IsNotEmpty()
  DB_HOST: string;

  @IsString()
  @IsNotEmpty()
  REDIS_URL: string;
}

/**
 *
 * @param config
 */
export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });
  if (errors.length > 0) {
    Logger.error(
      `Please review the below errors. Environment variables are not correctly configured.`,
    );
    const details = errors.map((error) => {
      return {
        PROPERTY: error.property,
        VALUE: error.value,
        MESSAGES: Object.values(error.constraints),
      };
    });
    throw new Error(JSON.stringify(details, null, 2));
  }
  return validatedConfig;
}

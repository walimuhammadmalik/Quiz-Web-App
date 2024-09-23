import { registerAs } from '@nestjs/config';
import { Logger } from '@nestjs/common';
import * as dotenv from 'dotenv';
dotenv.config();
import { SEQUELIZE_MIGRATION_TABLE_NAME } from '@common/constants';
import { SequelizeOptions } from 'sequelize-typescript';
import { Dialect } from 'sequelize/types/sequelize';

export const DATABASE_CONFIG: SequelizeOptions = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT || 1433,
  dialect: (process.env.DB_DIALECT as Dialect) || 'mssql',
  ...(process.env.ENVIRONMENT == 'development' && {
    migrationStorageTableName: SEQUELIZE_MIGRATION_TABLE_NAME,
  }),
  sync: {
    force: true,
  },
  dialectOptions: {
    ssl: {
      require: false,
      rejectUnauthorized: false,
    },
  },
  pool: {
    max: parseInt(process.env.DB_MAX_POOL) || 20,
    min: parseInt(process.env.DB_MIN_POOL) || 3,
    acquire: 30000,
    idle: 10000,
  },
  logging: (str) => {
    Logger.debug(str);
  },
};
export default registerAs('database', () => DATABASE_CONFIG);

import { DATABASE_CONFIG } from '@common/config/database.config';
const connection = DATABASE_CONFIG;
export const databaseConfig = {
  development: connection,
  test: connection,
  production: connection,
};
module.exports = databaseConfig;

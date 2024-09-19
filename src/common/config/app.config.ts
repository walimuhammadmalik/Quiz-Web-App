import * as dotenv from 'dotenv';
import * as process from 'process';
import { days, minutes } from 'milliseconds';

dotenv.config();
const SERVICE_NAME = process.env.SERVICE_NAME || 'quiz.app';

export const config = {
  ENVIRONMENT: process.env.NODE_ENV || 'development',
  SERVICE_NAME: process.env.SERVICE_NAME || 'quiz.app',
  HOSTNAME: process.env.HOSTNAME || 'http://localhost',
  PORT: parseInt(process.env.PORT) || 3000,
  PREFIX: process.env.PREFIX || 'api/v1/quiz-app',
  AUTH_SECRET: process.env.AUTH_API_SECRET,
  WHITELISTED_ORIGINS: process.env.CORS_ORIGINS?.split(',') || [
    'http://localhost:3000',
    'http://localhost:4200',
    process.env.FRONTEND_URL,
  ],
  TZ: process.env.TZ || 'Asia/Bahrain',
  FRONTEND_URL: process.env.FRONTEND_URL,
  RESET_PASSWORD_LINK: `${process.env.FRONTEND_URL}/reset-password/{{:token}}`,
  INVITATION_LINK: `${process.env.FRONTEND_URL}/invitation/{{:token}}`,
  EMAIL_VERIFICATION_LINK: `${process.env.FRONTEND_URL}/verify-email/{{:token}}`,
  IDLE_TIMEOUT: +process.env.IDLE_TIMEOUT_IN_MINUTES || 0,
  MAX_CONCURRENT_SESSIONS: +process.env.MAX_CONCURRENT_SESSIONS || 0,
  JWT: {
    SECRET: process.env.JWT_SECRET,
    ISSUER: 'quiz-app',
    ALGORITHM: process.env.JWT_ALGORITHM || 'HS256',
    REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
    ACCESS_TOKEN_EXPIRATION_TIME: minutes(+process.env.JWT_EXPIRY_MINUTES || 10),
    REFRESH_TOKEN_EXPIRATION_TIME: days(+process.env.JWT_REFRESH_EXPIRY_DAYS || 90),
  },
  HTTP_TIMEOUT: +process.env.HTTP_TIMEOUT || 60000,
  HTTP_MAX_REDIRECTS: +process.env.HTTP_MAX_REDIRECTS || 5,
  SMTP: {
    SENDER: process.env.SMTP_SENDER,
    HOST: process.env.SMTP_HOST,
    PORT: +process.env.SMTP_PORT || 587,
    SECURE: process.env.SMTP_SECURE == 'true' || false,
    USER: process.env.SMTP_USER,
    PASS: process.env.SMTP_PASS,
  },
  AUDIT_URL: `${process.env.AUDIT_URL}/graphql`,
  QUEUE_PREFIX: 'QUIZ_APP',
  QUEUE: {
    MAILER: process.env.MAILER_QUEUE || 'MAILER_QUEUE',
    QUIZ_APP: process.env.QUIZ_APP_QUEUE || 'QUIZ_APP_QUEUE',
  },
  REDIS_URL: process.env.REDIS_URL,
  LOGGER: {
    LABEL: SERVICE_NAME, // label will be the app id
    LEVEL: process.env.DEBUG == 'true' ? 'debug' : 'info',
    FILE_NAME: `%DATE%.${SERVICE_NAME.toLocaleLowerCase()}`,
  },
  SERVICE: {
    NOTIFICATION: {
      HOSTNAME: process.env.NOTIFICATION_SERVICE_HOSTNAME,
      HTTP_TIMEOUT: +(process.env.NOTIFICATION_SERVICE_HTTP_TIMEOUT || 5000),
      HTTP_MAX_REDIRECTS: 3,
    },
  },
  CRON_API_SECRET: process.env.CRON_API_SECRET,
  DOCUMENT_UPLOADING_LOCATION: `${process.cwd()}/uploads/`,
  SWAGGER: {
    ENABLE: process.env.SWAGGER_ENABLED == 'true' || false,
    ROUTE: process.env.PREFIX ? process.env.PREFIX + '/docs' : 'api/v1/quiz-app/docs',
  },
};

export default () => config;

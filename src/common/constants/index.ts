export * from './system-config.constant';
import app from '@common/config/app.config';
import { hours, minutes, months, seconds, weeks } from 'milliseconds';

const config = app();

export const TABLE = {
  USER: 'USERS',
  CLASS: 'CLASSES',
  CLASS_STUDENT: 'CLASS_STUDENTS',
  QUIZ: 'QUIZZES',
  QUESTION: 'QUESTIONS',
  ANSWER: 'ANSWERS',
  RESULT: 'RESULTS',
  QUIZ_CLASS_ASSIGNMENT: 'QUIZ_CLASS_ASSIGNMENTS',
  QUIZ_SUBMISSION: 'QUIZ_SUBMISSIONS',
};

export const X_USER_ID = 'x-user-id';
export const X_DEVICE_ID = 'x-device-id';
export const X_LOCAL_ID = 'x-locale-id';
export const X_ACCESS_TOKEN = 'authorization';
export const X_REFRESH_TOKEN = 'refresh';

export enum STATUS {
  PENDING = 'PENDING',
  // IN_ACTIVE = 'IN_ACTIVE',
  ACTIVE = 'ACTIVE',
  // ARCHIVED = 'ARCHIVED',
  SUCCEEDED = 'SUCCEEDED',
  FAILED = 'FAILED',
  DRAFT = 'DRAFT',
  // CONFIRMED = 'CONFIRMED',
  // ACCEPTED = 'ACCEPTED',
  // REJECTED = 'REJECTED',
  // CANCELLED = 'CANCELLED',
  SUBMITTED = 'SUBMITTED',
  // AVAILABLE = 'AVAILABLE',
  // COMPLETED = 'COMPLETED',
  // REVERSED = 'REVERSED',
  // DECLINED = 'DECLINED',
  // CREATED = 'CREATED',
  // APPROVED = 'APPROVED',
  // INITIATED = 'INITIATED',
  // SHIPPED = 'SHIPPED',
  // REFUNDED = 'REFUNDED',
  // UNSUCCESSFUL = 'UNSUCCESSFUL',
  SUCCESSFUL = 'SUCCESSFUL',
  PAID = 'PAID',
}

export const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\^$*.\[\]{}\(\)?\-\"!@#%&\/,><\':;|_~`])\S{8,99}$/;

export const BEARER = `Bearer`;
export const SEQUELIZE = 'SEQUELIZE';
export const SEQUELIZE_MIGRATION_TABLE_NAME = 'QUIZ_APP_SEQUELIZE_META';

export enum ORDER {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum CACHE_TTL {
  THIRTY_SECONDS = seconds(30),
  ONE_MINUTE = minutes(1),
  FIVE_MINUTES = minutes(5),
  FIFTEEN_MINUTES = minutes(15),
  THIRTY_MINUTES = minutes(30),
  ONE_HOUR = hours(1),
  ONE_DAY = hours(24),
  ONE_WEEK = weeks(1),
  ONE_MONTH = months(1),
  ONE_YEAR = 365 * 24 * 60,
}

export const CACHE_KEY_PREFIX = `${config.SERVICE_NAME}:route:/${config.PREFIX}/`;

export const CACHE_KEY = {
  PAYEE_BILL: `payee-bill`,
};
export const CACHE_KEYS_GLOBAL = [`${config.PREFIX}/billers`];
export const CONTEXT_NAMESPACE_ID = '16a29a6f-6747-4b5f-b99f-07ee96e44f01';

export const PROCESS_QUEUES = {
  UPDATE: 'UPDATE',
};

export const JOB_TYPE = {
  AUTO_LOGOUT: 'AUTO_LOGOUT',
};

export const QUEUE = {
  AUTO_LOGOUT: 'auto-logout-queue',
};

export const SMTP_MAILER = 'SMTP_MAILER';

export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHER = 'OTHER',
}
export enum PLATFORMS {
  ANDROID = 'android',
  IOS = 'ios',
  WEB = 'web',
}

// User roles
export enum USER_ROLE {
  ADMIN = 'ADMIN',
  STUDENT = 'STUDENT',
  TEACHER = 'TEACHER',
}

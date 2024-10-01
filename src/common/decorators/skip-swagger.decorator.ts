import { SetMetadata } from '@nestjs/common';

export const SkipSwaggerDocs = () => SetMetadata('skipSwaggerDocs', true);

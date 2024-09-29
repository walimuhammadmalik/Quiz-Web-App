import { ORDER } from '@common/constants';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import { IsBoolean, IsEnum, IsInt, IsOptional, IsString, Max, Min } from 'class-validator';

export class PageOptionsDto {
  @ApiPropertyOptional({ enum: ORDER, default: ORDER.ASC })
  @IsEnum(ORDER)
  @IsOptional()
  readonly order?: ORDER = ORDER.DESC;

  @ApiPropertyOptional({ default: 'updated_at' })
  @IsOptional()
  @IsString()
  readonly order_key?: 'updated_at';

  @ApiPropertyOptional({
    default: '',
    description: 'Search query',
  })
  @IsString()
  @IsOptional()
  readonly search?: string = '';

  @ApiPropertyOptional({
    minimum: 1,
    default: 1,
  })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @IsOptional()
  readonly page?: number = 1;

  @ApiPropertyOptional({
    minimum: 1,
    maximum: 200,
    default: 50,
  })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(200)
  @IsOptional()
  readonly page_size?: number = 50;

  @IsOptional()
  @Transform(({ value }) => ['true', true, 1].includes(value))
  @IsBoolean()
  @ApiPropertyOptional({
    type: Boolean,
    default: true,
  })
  pagination?: boolean = true;
}

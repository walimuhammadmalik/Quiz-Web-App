import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { PageDto, PageOptionsDto } from '@common/dtos';

export class UserDto {
  @ApiProperty({
    example: 'John',
    description: 'The first name of the user.',
    required: false,
  })
  @IsString()
  @IsOptional()
  first_name?: string;

  @ApiProperty({
    example: 'Doe',
    description: 'The last name of the user.',
    required: false,
  })
  @IsString()
  @IsOptional()
  last_name?: string;

  @ApiProperty({
    example: 'profile.jpg',
    description: 'The profile image of the user.',
    required: false,
  })
  @IsString()
  @IsOptional()
  profile_image?: string;

  @ApiProperty({
    example: '123456789',
    description: 'The mobile number of the user.',
    required: false,
  })
  @IsString()
  @IsOptional()
  mobile_no?: string;
}

class InviteUserDto {
  @ApiProperty({
    example: 'email@gmail.com',
    description: 'The email of the user.',
    required: true,
  })
  @IsString()
  email: string;
}

export class InviteUsersDto {
  @ApiProperty({
    type: [InviteUserDto],
    description: 'The list of users to invite.',
    required: true,
  })
  users: InviteUserDto[];
}

export class UpdateUserDto extends PartialType(UserDto) {}

export class FindAllUserDto extends PageOptionsDto {
  @ApiProperty({
    example: 'John',
    description: 'The first name of the user.',
    required: false,
  })
  @IsOptional()
  @IsString()
  first_name: string;

  @ApiProperty({
    example: 'Doe',
    description: 'The last name of the user.',
    required: false,
  })
  @IsOptional()
  @IsString()
  last_name: string;

  @ApiProperty({
    example: 'ACTIVE',
    description: 'The status of the user.',
    required: false,
  })
  @IsOptional()
  @IsString()
  status: string;

  @ApiProperty({
    example: 'email@gmail.com',
    description: 'The email of the user.',
    required: false,
  })
  @IsOptional()
  @IsString()
  email: string;

  roles: string[];
}

import {
  IsArray,
  IsOptional,
  IsString,
  IsInt,
  IsBoolean,
  IsEmail,
} from 'class-validator';
import { User } from '../entities/user.entity';

export class CreateUserDto extends User {
  @IsString()
  name: string;

  @IsString()
  surname: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  cpf: string;

  @IsBoolean()
  @IsOptional()
  admin?: boolean;

  @IsArray()
  @IsOptional()
  profilesIds?: number[];

  @IsInt({ each: true })
  @IsArray()
  @IsOptional()
  gamesIds?: number[];
}

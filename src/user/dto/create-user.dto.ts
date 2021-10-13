import { Type } from 'class-transformer';
import {
  IsArray,
  IsOptional,
  IsString,
  IsInt,
  ValidateNested,
} from 'class-validator';
import { CreateProfileDto } from 'src/profile/dto/create-profile.dto';
import { User } from '../entities/user.entity';

export class CreateUserDto extends User {
  @IsString()
  name: string;

  @IsString()
  surname: string;

  @IsString()
  email: string;

  @IsString()
  passwords: string;

  @IsString()
  cpf: string;

  @IsArray()
  @IsOptional()
  profilesIds?: number[];

  @IsInt({ each: true })
  @IsArray()
  @IsOptional()
  gamesIds?: number[];
}

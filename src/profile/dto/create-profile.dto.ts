import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Profile } from '../entities/profile.entity';

export class CreateProfileDto extends Profile {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  image?: string | null;

  @IsNumber()
  userId: number;
}

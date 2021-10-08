import { Genre } from '../entities/genre.entity';
import { IsNotEmpty, IsString } from 'class-validator';
export class CreateGenreDto extends Genre {
  @IsString()
  @IsNotEmpty()
  name: string;
}

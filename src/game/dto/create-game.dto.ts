import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateGenreDto } from 'src/genre/dto/create-genre.dto';
import { Game } from '../entities/game.entity';

export class CreateGameDto extends Game {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  capa: string;

  @IsString()
  description: string;

  @IsString()
  year: string | Date;

  @IsString()
  note: string;

  @IsString()
  trailer: string;

  @IsString()
  gameplay: string;
  // users?: Prisma.UsersOnGamesUncheckedCreateNestedManyWithoutGameInput;

  @ValidateNested({ each: true })
  @Type(() => CreateGenreDto)
  @IsArray()
  @IsOptional()
  genres?: CreateGenreDto[];
}

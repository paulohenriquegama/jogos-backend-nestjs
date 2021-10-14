import {
  ArrayNotEmpty,
  IsArray,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
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
  year: string;

  @IsString()
  note: string;

  @IsString()
  trailer: string;

  @IsString()
  gameplay: string;

  @IsInt({ each: true })
  @IsArray()
  @IsOptional()
  usersIds?: number[];

  @IsInt({ each: true })
  @IsArray()
  @ArrayNotEmpty()
  genresIds: number[];
}

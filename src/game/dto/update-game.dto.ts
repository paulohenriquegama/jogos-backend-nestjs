import { PartialType } from '@nestjs/mapped-types';
import { IsArray, IsNumber, IsOptional } from 'class-validator';
import { CreateGameDto } from './create-game.dto';

export class UpdateGameDto extends PartialType(CreateGameDto) {
  @IsOptional()
  @IsNumber({}, { each: true })
  @IsArray()
  genresDisconnectIds?: number[];
}

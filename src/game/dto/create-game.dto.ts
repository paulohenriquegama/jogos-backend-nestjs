import { Prisma } from '@prisma/client';
import { Game } from '../entities/game.entity';

export class CreateGameDto extends Game {
  title: string;
  capa: string;
  description: string;
  year: string | Date;
  note: string;
  trailer: string;
  gameplay: string;
  users?: Prisma.UsersOnGamesUncheckedCreateNestedManyWithoutGameInput;
  genres?: Prisma.GenreUncheckedCreateNestedManyWithoutGameInput;
}

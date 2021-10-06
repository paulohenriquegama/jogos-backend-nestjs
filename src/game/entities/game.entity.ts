import { Prisma } from '@prisma/client';

export class Game implements Prisma.GameUncheckedCreateInput {
  id?: number;
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

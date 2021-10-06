import { Prisma } from '@prisma/client';

export class UsersOnGame implements Prisma.UsersOnGamesUncheckedCreateInput {
  userId: number;
  gameId: number;
}

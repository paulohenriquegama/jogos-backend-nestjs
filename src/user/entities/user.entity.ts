import { Prisma } from '.prisma/client';

export class User implements Prisma.UserUncheckedCreateInput {
  id?: number;
  name: string;
  surname: string;
  email: string;
  passwords: string;
  cpf: string;
  profiles?: Prisma.ProfileUncheckedCreateNestedManyWithoutUserInput;
  games?: Prisma.UsersOnGamesUncheckedCreateNestedManyWithoutUserInput;
}

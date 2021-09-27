import { Prisma } from '@prisma/client';
import { User } from '../entities/user.entity';

export class CreateUserDto extends User {
  name: string;
  surname: string;
  email: string;
  passwords: string;
  cpf: string;
  profiles?: Prisma.ProfileUncheckedCreateNestedManyWithoutUserInput;
  games?: Prisma.UsersOnGamesUncheckedCreateNestedManyWithoutUserInput;
}

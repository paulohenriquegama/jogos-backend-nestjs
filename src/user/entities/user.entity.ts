import { Prisma } from '.prisma/client';
import { Game } from 'src/game/entities/game.entity';
import { Profile } from 'src/profile/entities/profile.entity';

export class User {
  id?: number;
  name: string;
  surname: string;
  email: string;
  password: string;
  cpf: string;
  profiles?: Profile[];
  games?: Game[];
}

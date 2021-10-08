// import { User } from 'src/user/entities/user.entity';
import { Genre } from 'src/genre/entities/genre.entity';

export class Game {
  id?: number;
  title: string;
  capa: string;
  description: string;
  year: string | Date;
  note: string;
  trailer: string;
  gameplay: string;
  // users?: User[];
  genres?: Genre[];
}

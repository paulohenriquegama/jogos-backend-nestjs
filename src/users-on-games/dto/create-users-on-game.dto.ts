import { UsersOnGame } from '../entities/users-on-game.entity';

export class CreateUsersOnGameDto extends UsersOnGame {
  userId: number;
  gameId: number;
}

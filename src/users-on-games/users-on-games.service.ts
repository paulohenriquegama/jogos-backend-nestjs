import { Injectable } from '@nestjs/common';
import { CreateUsersOnGameDto } from './dto/create-users-on-game.dto';
import { UpdateUsersOnGameDto } from './dto/update-users-on-game.dto';

@Injectable()
export class UsersOnGamesService {
  create(createUsersOnGameDto: CreateUsersOnGameDto) {
    return 'This action adds a new usersOnGame';
  }

  findAll() {
    return `This action returns all usersOnGames`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usersOnGame`;
  }

  update(id: number, updateUsersOnGameDto: UpdateUsersOnGameDto) {
    return `This action updates a #${id} usersOnGame`;
  }

  remove(id: number) {
    return `This action removes a #${id} usersOnGame`;
  }
}

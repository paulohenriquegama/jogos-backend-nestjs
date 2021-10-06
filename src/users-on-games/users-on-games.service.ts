import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUsersOnGameDto } from './dto/create-users-on-game.dto';
import { UpdateUsersOnGameDto } from './dto/update-users-on-game.dto';

@Injectable()
export class UsersOnGamesService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateUsersOnGameDto) {
    return this.prisma.usersOnGames.create({ data });
  }

  findAll() {
    return this.prisma.usersOnGames.findMany();
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

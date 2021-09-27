import { Module } from '@nestjs/common';
import { UsersOnGamesService } from './users-on-games.service';
import { UsersOnGamesController } from './users-on-games.controller';

@Module({
  controllers: [UsersOnGamesController],
  providers: [UsersOnGamesService]
})
export class UsersOnGamesModule {}

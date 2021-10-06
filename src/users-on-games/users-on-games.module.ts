import { Module } from '@nestjs/common';
import { UsersOnGamesService } from './users-on-games.service';
import { UsersOnGamesController } from './users-on-games.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [UsersOnGamesController],
  providers: [UsersOnGamesService, PrismaService],
})
export class UsersOnGamesModule {}

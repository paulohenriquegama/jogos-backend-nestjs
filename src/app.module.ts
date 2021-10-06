import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma/prisma.service';
import { GenreModule } from './genre/genre.module';
import { UsersOnGamesModule } from './users-on-games/users-on-games.module';
import { ProfileModule } from './profile/profile.module';
import { GameModule } from './game/game.module';

@Module({
  imports: [UserModule, GenreModule, UsersOnGamesModule, ProfileModule, GameModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}

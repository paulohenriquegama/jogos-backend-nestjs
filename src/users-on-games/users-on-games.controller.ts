import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersOnGamesService } from './users-on-games.service';
import { CreateUsersOnGameDto } from './dto/create-users-on-game.dto';
import { UpdateUsersOnGameDto } from './dto/update-users-on-game.dto';

@Controller('users-on-games')
export class UsersOnGamesController {
  constructor(private readonly usersOnGamesService: UsersOnGamesService) {}

  @Post()
  create(@Body() createUsersOnGameDto: CreateUsersOnGameDto) {
    return this.usersOnGamesService.create(createUsersOnGameDto);
  }

  @Get()
  findAll() {
    return this.usersOnGamesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersOnGamesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUsersOnGameDto: UpdateUsersOnGameDto,
  ) {
    return this.usersOnGamesService.update(+id, updateUsersOnGameDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersOnGamesService.remove(+id);
  }
}

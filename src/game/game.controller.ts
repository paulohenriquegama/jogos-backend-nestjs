import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { GameService } from './game.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { CurrentUser } from 'src/decorators/current-user.decorator';
import { User } from 'src/user/entities/user.entity';
import { Public } from 'src/auth/public.decorator';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Post()
  create(@Body() createGameDto: CreateGameDto) {
    return this.gameService.create(createGameDto);
  }

  @Public()
  @Get()
  findAll() {
    return this.gameService.findAll();
  }

  @Get('usercurrent')
  CurrentUser(@CurrentUser() currentUser: User) {
    return currentUser;
    // return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gameService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGameDto: UpdateGameDto) {
    return this.gameService.update(+id, updateGameDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.gameService.remove(+id);
  }
}

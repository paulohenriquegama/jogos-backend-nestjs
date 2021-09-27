import { Test, TestingModule } from '@nestjs/testing';
import { UsersOnGamesController } from './users-on-games.controller';
import { UsersOnGamesService } from './users-on-games.service';

describe('UsersOnGamesController', () => {
  let controller: UsersOnGamesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersOnGamesController],
      providers: [UsersOnGamesService],
    }).compile();

    controller = module.get<UsersOnGamesController>(UsersOnGamesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { UsersOnGamesService } from './users-on-games.service';

describe('UsersOnGamesService', () => {
  let service: UsersOnGamesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersOnGamesService],
    }).compile();

    service = module.get<UsersOnGamesService>(UsersOnGamesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

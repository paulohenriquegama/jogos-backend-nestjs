import { UsersOnGamesService } from './users-on-games.service';
import { CreateUsersOnGameDto } from './dto/create-users-on-game.dto';
import { UpdateUsersOnGameDto } from './dto/update-users-on-game.dto';
export declare class UsersOnGamesController {
    private readonly usersOnGamesService;
    constructor(usersOnGamesService: UsersOnGamesService);
    create(createUsersOnGameDto: CreateUsersOnGameDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateUsersOnGameDto: UpdateUsersOnGameDto): string;
    remove(id: string): string;
}

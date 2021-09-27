import { CreateUsersOnGameDto } from './dto/create-users-on-game.dto';
import { UpdateUsersOnGameDto } from './dto/update-users-on-game.dto';
export declare class UsersOnGamesService {
    create(createUsersOnGameDto: CreateUsersOnGameDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateUsersOnGameDto: UpdateUsersOnGameDto): string;
    remove(id: number): string;
}

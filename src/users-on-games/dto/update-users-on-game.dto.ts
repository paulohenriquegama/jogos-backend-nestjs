import { PartialType } from '@nestjs/mapped-types';
import { CreateUsersOnGameDto } from './create-users-on-game.dto';

export class UpdateUsersOnGameDto extends PartialType(CreateUsersOnGameDto) {}

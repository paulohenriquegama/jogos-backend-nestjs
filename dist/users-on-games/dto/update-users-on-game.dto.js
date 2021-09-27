"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUsersOnGameDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_users_on_game_dto_1 = require("./create-users-on-game.dto");
class UpdateUsersOnGameDto extends (0, mapped_types_1.PartialType)(create_users_on_game_dto_1.CreateUsersOnGameDto) {
}
exports.UpdateUsersOnGameDto = UpdateUsersOnGameDto;
//# sourceMappingURL=update-users-on-game.dto.js.map
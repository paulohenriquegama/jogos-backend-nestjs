"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersOnGamesService = void 0;
const common_1 = require("@nestjs/common");
let UsersOnGamesService = class UsersOnGamesService {
    create(createUsersOnGameDto) {
        return 'This action adds a new usersOnGame';
    }
    findAll() {
        return `This action returns all usersOnGames`;
    }
    findOne(id) {
        return `This action returns a #${id} usersOnGame`;
    }
    update(id, updateUsersOnGameDto) {
        return `This action updates a #${id} usersOnGame`;
    }
    remove(id) {
        return `This action removes a #${id} usersOnGame`;
    }
};
UsersOnGamesService = __decorate([
    (0, common_1.Injectable)()
], UsersOnGamesService);
exports.UsersOnGamesService = UsersOnGamesService;
//# sourceMappingURL=users-on-games.service.js.map
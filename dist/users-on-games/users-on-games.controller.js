"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersOnGamesController = void 0;
const common_1 = require("@nestjs/common");
const users_on_games_service_1 = require("./users-on-games.service");
const create_users_on_game_dto_1 = require("./dto/create-users-on-game.dto");
const update_users_on_game_dto_1 = require("./dto/update-users-on-game.dto");
let UsersOnGamesController = class UsersOnGamesController {
    constructor(usersOnGamesService) {
        this.usersOnGamesService = usersOnGamesService;
    }
    create(createUsersOnGameDto) {
        return this.usersOnGamesService.create(createUsersOnGameDto);
    }
    findAll() {
        return this.usersOnGamesService.findAll();
    }
    findOne(id) {
        return this.usersOnGamesService.findOne(+id);
    }
    update(id, updateUsersOnGameDto) {
        return this.usersOnGamesService.update(+id, updateUsersOnGameDto);
    }
    remove(id) {
        return this.usersOnGamesService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_users_on_game_dto_1.CreateUsersOnGameDto]),
    __metadata("design:returntype", void 0)
], UsersOnGamesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersOnGamesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersOnGamesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_users_on_game_dto_1.UpdateUsersOnGameDto]),
    __metadata("design:returntype", void 0)
], UsersOnGamesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersOnGamesController.prototype, "remove", null);
UsersOnGamesController = __decorate([
    (0, common_1.Controller)('users-on-games'),
    __metadata("design:paramtypes", [users_on_games_service_1.UsersOnGamesService])
], UsersOnGamesController);
exports.UsersOnGamesController = UsersOnGamesController;
//# sourceMappingURL=users-on-games.controller.js.map
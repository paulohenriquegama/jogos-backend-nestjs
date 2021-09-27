"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersOnGamesModule = void 0;
const common_1 = require("@nestjs/common");
const users_on_games_service_1 = require("./users-on-games.service");
const users_on_games_controller_1 = require("./users-on-games.controller");
let UsersOnGamesModule = class UsersOnGamesModule {
};
UsersOnGamesModule = __decorate([
    (0, common_1.Module)({
        controllers: [users_on_games_controller_1.UsersOnGamesController],
        providers: [users_on_games_service_1.UsersOnGamesService]
    })
], UsersOnGamesModule);
exports.UsersOnGamesModule = UsersOnGamesModule;
//# sourceMappingURL=users-on-games.module.js.map
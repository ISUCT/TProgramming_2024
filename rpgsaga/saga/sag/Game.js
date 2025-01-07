"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
var Logger_1 = require("./Logger");
var Game = /** @class */ (function () {
    function Game(players) {
        this.players = players;
    }
    Game.prototype.start = function () {
        var round = 1;
        while (this.players.length > 1) {
            Logger_1.Logger.log("\u0420\u0430\u0443\u043D\u0434 ".concat(round));
            this.fight();
            this.players = this.players.filter(function (player) { return player.isAlive(); });
            round++;
        }
        Logger_1.Logger.log("\u041F\u043E\u0431\u0435\u0434\u0438\u0442\u0435\u043B\u044C: ".concat(this.players[0].name));
    };
    Game.prototype.fight = function () {
        // Убедимся, что количество игроков четное
        if (this.players.length % 2 !== 0) {
            // Если количество игроков нечетное, удаляем последнего игрока
            this.players.pop();
            Logger_1.Logger.log("Количество игроков стало нечетным. Последний игрок удален из раунда.");
        }
        for (var i = 0; i < this.players.length; i += 2) {
            var player1 = this.players[i];
            var player2 = this.players[i + 1];
            if (!player1 || !player2) {
                // Если один из игроков отсутствует, пропускаем этот бой
                continue;
            }
            Logger_1.Logger.log("".concat(player1.name, " vs ").concat(player2.name));
            while (player1.isAlive() && player2.isAlive()) {
                this.performTurn(player1, player2);
                if (player2.isAlive()) {
                    this.performTurn(player2, player1);
                }
            }
            if (!player1.isAlive()) {
                Logger_1.Logger.log("".concat(player1.name, " \u043F\u043E\u0433\u0438\u0431\u0430\u0435\u0442"));
            }
            else {
                Logger_1.Logger.log("".concat(player2.name, " \u043F\u043E\u0433\u0438\u0431\u0430\u0435\u0442"));
            }
        }
    };
    Game.prototype.performTurn = function (attacker, defender) {
        if (Math.random() < 0.5) {
            attacker.useAbility(defender);
        }
        else {
            defender.takeDamage(attacker.strength);
            Logger_1.Logger.log("".concat(attacker.name, " \u043D\u0430\u043D\u043E\u0441\u0438\u0442 \u0443\u0440\u043E\u043D ").concat(attacker.strength, " \u043F\u0440\u043E\u0442\u0438\u0432\u043D\u0438\u043A\u0443 ").concat(defender.name));
        }
    };
    return Game;
}());
exports.Game = Game;

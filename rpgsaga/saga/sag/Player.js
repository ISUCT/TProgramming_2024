"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
var Player = /** @class */ (function () {
    function Player(name, health, strength) {
        this.name = name;
        this.health = health;
        this.strength = strength;
    }
    Player.prototype.takeDamage = function (damage) {
        this.health -= damage;
        if (this.health < 0)
            this.health = 0;
    };
    Player.prototype.isAlive = function () {
        return this.health > 0;
    };
    return Player;
}());
exports.Player = Player;

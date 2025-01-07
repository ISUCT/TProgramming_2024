"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Knight_1 = require("./Knight");
var Archer_1 = require("./Archer");
var Wizard_1 = require("./Wizard");
var Game_1 = require("./Game");
var names = ["Бимбим", "Бомбом", "Бамбам", "Чича", "С уважением, Александр", "Наш слон", "Бимбо унитаз", "Святогор"];
var players = [];
for (var i = 0; i < 8; i++) {
    var name_1 = names[Math.floor(Math.random() * names.length)];
    var health = Math.floor(Math.random() * 100) + 50;
    var strength = Math.floor(Math.random() * 20) + 10;
    var playerType = Math.floor(Math.random() * 3);
    if (playerType === 0) {
        players.push(new Knight_1.Knight(name_1, health, strength));
    }
    else if (playerType === 1) {
        players.push(new Archer_1.Archer(name_1, health, strength));
    }
    else {
        players.push(new Wizard_1.Wizard(name_1, health, strength));
    }
}
var game = new Game_1.Game(players);
game.start();

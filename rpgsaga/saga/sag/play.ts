import { Player } from './Player';
import { Knight } from './Knight';
import { Archer } from './Archer';
import { Wizard } from './Wizard';
import { Game } from './Game';
import { Logger } from './Logger';

const names = ["Бимбим", "Бомбом", "Бамбам", "Чича", "С уважением, Александр", "Наш слон", "Бимбо унитаз", "Святогор"];
const players: Player[] = [];

for (let i = 0; i < 8; i++) {
    const name = names[Math.floor(Math.random() * names.length)];
    const health = Math.floor(Math.random() * 100) + 50;
    const strength = Math.floor(Math.random() * 20) + 10;

    const playerType = Math.floor(Math.random() * 3);
    if (playerType === 0) {
        players.push(new Knight(name, health, strength));
    } else if (playerType === 1) {
        players.push(new Archer(name, health, strength));
    } else {
        players.push(new Wizard(name, health, strength));
    }
}

const game = new Game(players);
game.start();
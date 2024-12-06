import { Hero } from "./heroes/hero";

export class Game {
    player1: Hero;
    player2: Hero;

    constructor(player1: Hero, player2: Hero) {
        this.player1 = player1;
        this.player2 = player2;
    }

    start() {
        console.log('Игра началась!');
        let currentPlayer = this.player1;
        let opponent = this.player2;

        while (this.player1.health > 0 && this.player2.health > 0) {
            console.log(`\nХод игрока: ${currentPlayer.constructor.name}`);
            this.makeMove(currentPlayer, opponent);
            
            [currentPlayer, opponent] = [opponent, currentPlayer];
        }

        console.log(`\nИгра окончена! Победитель: ${this.player1.health > 0 ? this.player1.constructor.name : this.player2.constructor.name}`);
    }

    makeMove(currentPlayer: Hero, opponent: Hero) {
        if (Math.random() < 0.5) {
            currentPlayer.attack(opponent);
        } else {
            currentPlayer.useAbility(opponent);
        }
    }
}
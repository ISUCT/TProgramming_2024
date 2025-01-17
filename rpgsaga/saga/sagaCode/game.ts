import { Knight } from "./heroClasses/knight";
import { Archer } from "./heroClasses/archer";
import { Player } from "./playerClass/player";
import { Mage } from "./heroClasses/mage";
import { randomNumber } from "./randomGenerator";
import { Effect } from "./effectOfDamage/effect";

export class Game {
    players: Player[];
    round: number;

    constructor(players: Player[]) {
        if (players.length % 2 !== 0) {
            throw new Error("Количество игроков должно быть четным!");
        }
        this.players = players;
        this.round = 1;
    }

    public startGame() {
        console.log("Игра началась!");
        while (this.players.length > 1) {
            console.log(`\n=== Начало ${this.round} Раунда ===`);
            this.players = this.playRound(this.players);
            this.refreshHeroes(this.players);
            this.round++;
        }

        const champion = this.players[0];
        console.log(`\nПобедитель игры: ${champion.name}! Поздравляем!`);
      }

    public refreshHeroes(players: Player[]) {
        for (const player of players) {
            player.health = player.maxHealth; 
            player.activesEffect = null; 
            if (player instanceof Mage) {
                player.statusOfEffect = 1;
            } else if (player instanceof Knight) {
                player.statusOfEffect = 2;
            } else if (player instanceof Archer) {
                player.statusOfEffect = 1;
            }
        }
    }

    public handleActiveEffects(player: Player) {
        if (player.activeEffect) {
            const enemy = player.activeEffect.target;
            if (enemy.isAlive) {
                if (player.activeEffect.duration <= 0) {
                    console.log(`Эффект ${player.activeEffect.type} завершился.`);
                    player.activesEffect = null; 
                } else {
                        console.log(`Применение эффекта: ${player.activeEffect.type}`);
                        player.activeEffect.applyEffect(enemy);
                    }
            }
        }
    }

      public playRound(players: Player[]) {
        const winners: Player[] = [];

        for (let i = 0; i < players.length; i += 2) {
            const player1 = players[i];
            const player2 = players[i + 1];
            console.log(`\nБой между ${player1.name} и ${player2.name}`);
            const winner = this.fight(player1, player2);
            winners.push(winner);
        }

        return winners;
      }

      public fight(player1: Player, player2: Player): Player {
        while (player1.isAlive() && player2.isAlive()) {
            this.takeTurn(player1, player2);
            if (!player2.isAlive()) break;
            this.takeTurn(player2, player1);
        }

        const winner = player1.isAlive() ? player1 : player2;
        console.log(`Победитель боя: ${winner.name}`);
        return winner;
    }

      takeTurn(player: Player, player2: Player) {
        this.handleActiveEffects(player); // применяем эффекты перед ходом
        if (player instanceof Mage) {
          if (randomNumber(1,2) !== 2) {
            const target = player2;
            console.log(`${player.name} выбирает атаковать!`);
            player.attack(target); 
          } else {
            if (player.statusEffect === 0 ) {
                const target = player2;
                console.log(`${player.name} выбирает атаковать!`);
                player.attack(target);
            } else {
                const target = player2;
                console.log(`${player.name} выбирает использование Огненного шара!`);
                const fireballEffect = new Effect("Огненный шар", 25, 3, target); 
                player.useFireball(target, fireballEffect);
            }
          }
        } else if (player instanceof Archer) {
          if (randomNumber(1,2) === 2) {
            const target = player2;
            console.log(`${player.name} выбирает атаковать!`);
            player.attack(target);
          } else {
            if (player.statusEffect === 0 ) {
                const target = player2;
                console.log(`${player.name} выбирает атаковать!`);
                player.attack(target);
            } else {
            const target = player2;
            console.log(`${player.name} выбирает использование зачарованной стрелы`);
            const arrowEffect = new Effect("Ледяная стрела", 10, 3, player);
            player.useArrowEffect(target, arrowEffect);
            }
          }
        } else if (player instanceof Knight) {
          if (randomNumber(1,2) !== 2) {
            const target = player2;
            console.log(`${player.name} выбирает атаковать!`);
            player.attack(target);
          } else {
            if (player.statusEffect === 0 ) {
                const target = player2;
                console.log(`${player.name} выбирает атаковать!`);
                player.attack(target);
            } else {
                console.log(`${player.name} выбирает восстановить здоровье!`);
                player.useHealEffect();
            }
          }
        }
    }
}





import { knight } from "./heroClasses/knight";
import { archer } from "./heroClasses/archer";
import { Player } from "./playerClass/player";
import { mage } from "./heroClasses/mage";
import { randomNumber } from "./randomizer";
import { Effect } from "./effectOfDamage/effect";

export class game {
    players: Player[];
    round: number;

    constructor(players: Player[]) {
        this.players = players;
        this.round = 1;
    }

    start() {
        console.log("Игра началась!");
        while (this.players.filter(player => player.isAlive()).length > 1) {
          this.playRound();
        }
    
        const winner = this.players.find(player => player.isAlive());
        if (winner) {
          console.log(`${winner.name} победил в игре!`);
        } else {
          console.log("Никто не выжил. Игра завершена.");
        }
      }

    handleActiveEffects(player: Player) {
        if (player.activeEffect) {
            console.log(`Применение эффекта: ${player.activeEffect.type}`);
            const enemy = player.activeEffect.target;
            if (player.activeEffect.target === player) {
                console.log(`Эффект ${player.activeEffect.type} не применяется, так как это собственный эффект игрока.`);
            } else {
                player.activeEffect.applyEffect(player.activeEffect.target);
                if (player.activeEffect.duration <= 0) {
                    console.log(`Эффект ${player.activeEffect.type} завершился.`);
                    player.activesEffect = null;
                }
            }
        }
    }

      playRound() {
        console.log(`\n=== Начало ${this.round} Раунда ===\n`);
        this.round++;
    
        for (const player of this.players) {
          if (player.isAlive()) {
            console.log(`Ход игрока: ${player.name} (Здоровье: ${player.health})`);
            this.handleActiveEffects(player);
            this.takeTurn(player);
          }
        }
      }

      takeTurn(player: Player) {
        if (player instanceof mage) {
          if (randomNumber(1,2) !== 2) {
            const target = this.getRandomTarget(player);
            console.log(`${player.name} выбирает атаковать!`);
            player.attack(target); 
          } else {
            if (player.statusEffect === true ) {
                const target = this.getRandomTarget(player);
                player.attack(target);
            } else {
                const target = this.getRandomTarget(player);
                console.log(`${player.name} выбирает использование Огненного шара!`);
                const fireballEffect = new Effect("Огненный шар", 25, 3, target); 
                player.useFireball(target, fireballEffect);
            }
          }
        } else if (player instanceof archer) {
          if (randomNumber(1,2) === 2) {
            const target = this.getRandomTarget(player);
            console.log(`${player.name} выбирает атаковать!`);
            player.attack(target);
          } else {
            if (player.statusEffect === true ) {
                const target = this.getRandomTarget(player);
                player.attack(target);
            } else {
            const target = this.getRandomTarget(player);
            console.log(`${player.name} выбирает использование зачарованной стрелы`);
            const arrowEffect = new Effect("Ледяная стрела", 10, 3, player);
            player.useArrowEffect(target, arrowEffect);
            }
          }
        } else if (player instanceof knight) {
          if (randomNumber(1,5) !== 5) {
            const target = this.getRandomTarget(player);
            console.log(`${player.name} выбирает атаковать!`);
            player.attack(target);
          } else {
            console.log(`${player.name} выбирает восстановить здоровье!`);
            player.useHealEffect();
          }
        }
    }

        public getRandomTarget(player: Player): Player {
            const alivePlayers = this.players.filter(p => p.isAlive() && p !== player);
            return alivePlayers[Math.floor(Math.random() * alivePlayers.length)];
    }
}





import { Сharacter } from './Character'
import { Calculator } from './Calculator';
import * as readline from 'readline'

class Game {

    gamers: Сharacter[] = [];
    winners: Сharacter[] = [];

    startgame() {
        console.log("Game started");
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        rl.question('введите кол-во игроков', charactersCount => {
            if (Calculator.isEven(charactersCount) == true) { this.generateChar(Number(charactersCount)); }
            else { console.log("ВВЕДЕНО НЕЧЕТНОЕ КОЛ-ВО ИГРОКОВ"); }

            rl.close();
        });
    }

    generateChar(numPlayer: number) {
        for (let i = 0; i < numPlayer; i++) {
            let char = new Сharacter();
            this.gamers.push(char);
        }
this.sortChar()
    }

    fight(opponent1: Сharacter, opponent2: Сharacter): Сharacter {
        let priority: boolean = true;
        while(true){
            if (priority == true) {
                opponent2.takeDamage(opponent1.getDamage());

            }
            else {
                opponent1.takeDamage(opponent2.getDamage());
            } 
            priority = !priority; 
              if (opponent1.lookHears() < 0) { return opponent2; }
        else if(opponent2.lookHears() < 0) { return opponent1; }
        }
     
    }

    sortChar() {
        if (!Calculator.isEven(this.gamers.length) == true) {
            this.winners.push(this.gamers[0]);
            this.gamers.splice(0, 1);
        }
        for (let i = 0; i < (this.gamers.length / 2); i++) {
            let index1: number = Calculator.random(0, this.gamers.length - 1);
            let opponent1: Сharacter = this.gamers[index1];
            this.gamers.splice(index1, 1);
            let index2: number = Calculator.random(0, this.gamers.length - 1);
            let opponent2: Сharacter = this.gamers[index2];
            this.gamers.splice(index2, 1);
            let winner: Сharacter = this.fight(opponent1, opponent2);
            winner.reHealth();
            this.winners.push(winner);
            console.log(`победил ${winner.getName()}`);

        }

    }
}


const game = new Game();
game.startgame();


import { Calculater } from "./Calculater";
import { Character } from "./Character";
import * as readline from 'readline';
import { Knight } from "./Classes/Knight";
import { Mag } from "./Classes/Mag";
import { Archer } from "./Classes/Archer";
import { Logger } from "./logger";


class Game {
    players: Character[] = [];
    winners: Character[] = [];


    startGame() {
        Logger.logStartGame();
        let rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question('Введите кол-во игроков ', (answer) => {
            if (Calculater.isEven(Number(answer))) {
                let charNum: number = (Number(answer));
                this.generate(charNum);

            }
            else {
                Logger.logNotEvenGamers();
            }
            rl.close();

        });

    }

    generate(numChar: number) {
        for (let i: number = 0; i < numChar; i++) {
            let person: Character;
            let randomClass: number = Calculater.random(0, 2);
            switch (randomClass) {
                case 0:
                    person = new Mag();
                    break;

                case 1:
                    person = new Knight();
                    break;
                case 2:
                    person = new Archer();
                    break;
            }
            Logger.logRepresentation(person);
            this.players.push(person);
        }
        this.sortPerson();
    }
    sortPerson() {
        let lengthWinner: number = 0;
        let countTurn = 1;
        while (true) {
            Logger.logCountTurn(countTurn);
            countTurn = 1 + countTurn;


            if (Calculater.isEven(this.players.length) == false) {
                this.winners.push(this.players[0]);
                this.players.splice(0, 1);
            }
            let sortNum: number = this.players.length;
            for (let i = 0; i < sortNum / 2; i++) {

                let num1: number = Calculater.random(0, this.players.length - 1);
                let oponent1: Character = this.players[num1];
                this.players.splice(num1, 1);
                let num2: number = Calculater.random(0, this.players.length - 1);
                let oponent2: Character = this.players[num2];
                this.players.splice(num2, 1);
                this.fight(oponent1, oponent2);
            }
            if (this.winners.length == 1) {
                Logger.logWinWin(this.winners[0]);
                break;

            }

            this.players.length = 0;
            this.players = this.winners.slice();
            this.winners.length = 0;
            Logger.logOverTurn();
        }

    }
    fight(oponent1: Character, oponent2: Character) {
        let priority: boolean = true;
        while (oponent1.health > 0 && oponent2.health > 0) {
            if (priority) {
                oponent1.turn(oponent2);
            }
            else {
                oponent2.turn(oponent1);
            }
            priority = !priority;
        }
        if (oponent1.health <= 0) {
            oponent2.reHealth();
            this.winners.push(oponent2);
            Logger.logWinner(oponent2);

        }
        else {
            oponent1.reHealth();
            this.winners.push(oponent1);
            Logger.logWinner(oponent1);
        }
    }
}

let game = new Game();
game.startGame();

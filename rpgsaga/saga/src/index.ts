import { Calculater } from "./Calculater";
import { Character } from "./Character";
import * as readline from 'readline';

console.log('Hello world');
class Game {
    players: Character[] = [];
    winners: Character[] = [];

    startGame() {
        console.log("Игра началась");
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
                console.log("Введенно нечетное кол-во игроков. Игра не может начаться");
            }
            rl.close();

        });

    }

    generate(numChar: number) {
        for (let i: number = 0; i < numChar; i++) {
            let person = new Character();
            console.log(`Я ${person.name}. У меня ${person.health} здоровья. И я бью на ${person.damage} урона!`);
            this.players.push(person);
        }
        this.sortPerson()
    }
    sortPerson() {
        let sortNum:number=this.players.length
        if (Calculater.isEven(this.players.length) == false) {
            this.winners.push(this.players[0]);
            this.players.splice(0, 1);
        }
        for (let i = 0; i < sortNum/2; i++) {
            
            let num1: number = Calculater.random(0, this.players.length - 1);
            let oponent1: Character = this.players[num1];
            this.players.splice(num1, 1);
            let num2: number = Calculater.random(0, this.players.length - 1);
            let oponent2: Character = this.players[num2];
            this.players.splice(num2, 1);
            this.fight(oponent1, oponent2);
        }
    }
    fight(oponent1: Character, oponent2: Character) {
        let priority: boolean = true
        while (oponent1.health > 0 && oponent2.health > 0) {
            if (priority) {
                oponent1.fightDamager(oponent2.damage);
                console.log(`${oponent2.name} ударил на ${oponent2.damage}. У ${oponent1.name} осталось ${oponent1.health} здоровья`);
            }
            else {
                oponent2.fightDamager(oponent1.damage);
                console.log(`${oponent1.name} ударил на ${oponent1.damage}. У ${oponent2.name} осталось ${oponent2.health} здоровья`);
            }
            priority = !priority;
        }
        if (oponent1.health <= 0) {
           
            this.winners.push(oponent2);
            console.log(`Победил ${oponent2.name}`);

        }
        else {
          
            this.winners.push(oponent1);
            console.log(`Победил ${oponent1.name}`);
        }
    }
}

let game = new Game();
game.startGame();
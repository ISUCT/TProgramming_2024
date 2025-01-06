import { Character } from "./Character";

export class Logger {
    static logStartGame() {
        console.log("Игра началась");
    }
    static logNotEvenGamers() {
        console.log("Введенно нечетное кол-во игроков. Игра не может начаться");
    }
    static logFight(oponent1: Character, oponent2: Character) {
        console.log(`${oponent1.name} ударил на ${oponent1.damage}. У ${oponent2.name} осталось ${oponent2.health} здоровья`);
    }
    static logRepresentation(person: Character) {
        console.log(`Я ${person.name} ${person.class}. У меня ${person.health} здоровья. И я бью на ${person.damage} урона!`);
    }
    static logBurn(oponent: Character) {
        console.log(`${oponent.name} горю!`);
    }
    static logWinner(oponent: Character) {
        console.log(`Победил ${oponent.name}`);
    }

    static logFireArrows(oponent: Character) {
        console.log(`${oponent.name} использует способность: ОГНЕННЫЕ СТРЕЛЫ. Поджигает противника. Теперь каждый ход противник теряет 10 здоровья`);
    }

    static logKnightStrike(oponent: Character) {
        console.log(`${oponent.name} использует способность: УДАР ВОЗМЕЗДИЯ. Наносит ${oponent.damage + oponent.damage * 0.3}`);

    }

    static logMagSkill(oponent: Character) {
        console.log(`${oponent.name} использует способность: ЗАВОРОЖЕНИЕ`);
    }

    static logProteced(gamer: Character) {
        console.log(`${gamer.name} под защитой!`);
    }

    static logWinWin(gamer: Character) {
        console.log(`${gamer.name} победил!!!`);
    }

    static logCountTurn(countTurn: number) {
        console.log(`${countTurn} раунд`);


    }
    static logOverTurn() {
        console.log("Раунд закончился ");
    }

}
import { Hero } from "./Hero"

export function solution(a: number, b: number, x: number): number {
    let res = ((Math.pow(a, x) - Math.pow(b, x)) / Math.log(a / b)) * Math.pow(a * b, 1 / 3)
    return res
}

export function task_A(a: number, b: number, x_str: number, x_end: number, x_stp: number): Array<number> {
    let answ = []
    for (let i = x_str; i < x_end; i += x_stp) {
        answ.push(solution(a, b, i))
    }
    return answ
}

export function task_B(a: number, b: number, array_x: Array<number>): Array<number> {
    let answ = []
    for (let i of array_x) {
        answ.push(solution(a, b, i))
    }
    return answ
}

const a = 0.4
const b = 0.8
const x_str = 3.2
const x_end = 6.2
const x_stp = 0.6
const array_x = [4.48, 3.56, 2.78, 5.28, 3.21]


console.log("Karetina_Svetlana_lab_1_7")
console.log("Task A:")
console.log(task_A(a, b, x_str, x_end, x_stp))
console.log("Task B:")
console.log(task_B(a, b, array_x))

class gamer {

    players: Hero[] = [];
    winners: Hero[] = [];

    startGame() {
        console.log("game start")
        this.generate();
    }

    generate() {
        let num: number = 2
        for (let i: number = 0; i < num; i++) {
            let person: Hero = new Hero;
            this.players.push(person);
        }
        const opponent1: Hero = this.players[0]
        const opponent2: Hero = this.players[1]
        this.fight(opponent1, opponent2);
    }

    fight(opponent1: Hero, opponent2: Hero) {
        let priopity: boolean = true;
        while (opponent1.healthh() > 0 && opponent2.healthh() > 0) {
            if (priopity) {
                opponent1.fightDamager(opponent2.energyy);
                console.log(`${opponent1.namee} ударил`)
            } else {
                opponent2.fightDamager(opponent1.energyy);
                console.log(`${opponent2.namee} ударил`)
            }
            priopity = !priopity;
        }
        if (opponent1.healthh() <= 0) {
            console.log(`${opponent2.namee} победил`)

        } else {
            console.log(`${opponent1.namee} победил`)
        }
    }

}
const game = new gamer();
game.startGame();


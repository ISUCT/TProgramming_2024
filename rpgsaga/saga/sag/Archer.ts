import { Player } from './Player';
import { Logger } from './Logger';

export class Archer extends Player {
    private fireArrowsUsed: boolean = false;

    constructor(name: string, health: number, strength: number) {
        super(name, health, strength);
    }

    useAbility(opponent: Player): void {
        if (!this.fireArrowsUsed) {
            this.fireArrowsUsed = true;
            Logger.log(`${this.name} использует Огненные стрелы. Противник ${opponent.name} будет терять по 2 единицы здоровья каждый ход.`);
        }
    }

    takeDamage(damage: number): void {
        if (this.fireArrowsUsed) {
            damage += 2;
        }
        super.takeDamage(damage);
    }
}
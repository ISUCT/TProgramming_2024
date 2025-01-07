import { Player } from './Player';
import { Logger } from './Logger';

export class Wizard extends Player {
    private isCharmed: boolean = false;

    constructor(name: string, health: number, strength: number) {
        super(name, health, strength);
    }

    useAbility(opponent: Player): void {
        this.isCharmed = true;
        Logger.log(`${this.name} использует Заворожение. Противник ${opponent.name} пропускает ход.`);
    }

    takeDamage(damage: number): void {
        if (this.isCharmed) {
            Logger.log(`${this.name} пропускает ход из-за Заворожения.`);
            this.isCharmed = false;
            return;
        }
        super.takeDamage(damage);
    }
}
import { Player } from './Player';
import { Logger } from './Logger';


export class Knight extends Player {
    constructor(name: string, health: number, strength: number) {
        super(name, health, strength);
    }

    useAbility(opponent: Player): void {
        const damage = this.strength * 1.3;
        opponent.takeDamage(damage);
        Logger.log(`${this.name} использует Удар возмездия и наносит урон ${damage} противнику ${opponent.name}`);
    }
}
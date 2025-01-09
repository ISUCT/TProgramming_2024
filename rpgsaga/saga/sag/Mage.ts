import { Hero } from './Hero';
import { Logger } from './Logger';

export class Mage extends Hero {
    private charmUsed: boolean = false;

    static className = 'Маг';

    constructor(health: number, strength: number, name: string) {
        super(health, strength, name);
    }

    useAbility(opponent: Hero): void {
        if (!this.charmUsed) {
            this.charmUsed = true;
            opponent.skipNextTurn(); 
            Logger.log(`(${this.getClassName()}) ${this.name} накладывает на противника заворожение! (${opponent.getClassName()}) ${opponent.getName()} не в силах пошевелиться и вынужден молча наблюдать за тем, как его убивают в следующем ходу.`);
        } else if (this.canUseAbility()) {
            const damage = this.calculateDamage(); 
            opponent.takeDamage(damage);
            this.useIceArrows(opponent);
            Logger.log(`(${this.getClassName()}) ${this.name} использует ледяные стрелы и наносит ${damage} урона ${opponent.getName()}!`);
        } else {
            this.attack(opponent); 
        }
    }

    attack(opponent: Hero): void {
        const damage = this.calculateDamage(); 
        opponent.takeDamage(damage);
        Logger.log(`(${this.getClassName()}) ${this.name} бьёт посохом по голове (${opponent.getClassName()}) ${opponent.getName()} на ${damage} урона!`);

        this.applyIceArrowDamage(opponent);
    }

    protected canUseAbility(): boolean {
        return this.iceArrowsUsed < this.getMaxIceArrowsUses();
    }
}
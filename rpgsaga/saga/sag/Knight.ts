import { Hero } from './Hero';
import { Logger } from './Logger';

export class Knight extends Hero {
    private vengeanceUsed: boolean = false;

    static className = 'Рыцарь';

    constructor(health: number, strength: number, name: string) {
        super(health, strength, name);
    }

    useAbility(opponent: Hero): void {
        if (!this.vengeanceUsed) {
            const damage = this.calculateDamage() * 3; 
            opponent.takeDamage(damage);
            this.vengeanceUsed = true;
            Logger.log(`(${this.getClassName()}) ${this.name} использует силушку богатырскую и дубасит (${opponent.getClassName()}) ${opponent.getName()} на ${damage} урона!`);
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
        Logger.log(`(${this.getClassName()}) ${this.name} рубит (${opponent.getClassName()}) ${opponent.getName()} на ${damage} урона!`);

        this.applyIceArrowDamage(opponent);
    }

    protected canUseAbility(): boolean {
        return this.iceArrowsUsed < this.getMaxIceArrowsUses();
    }
}
import { Hero } from './Hero';
import { Logger } from './Logger';

export class Archer extends Hero {
    private fireArrowsUsed: boolean = false;
    private fireArrowsActive: boolean = false;
    private fireArrowsTarget: Hero | null = null;

    static className = 'Лучник';

    constructor(health: number, strength: number, name: string) {
        super(health, strength, name);
    }

    useAbility(opponent: Hero): void {
        if (!this.fireArrowsUsed) {
            this.fireArrowsUsed = true;
            this.fireArrowsActive = true;
            this.fireArrowsTarget = opponent;
            Logger.log(`(${this.getClassName()}) ${this.name} использует огненные стрелы! ${opponent.getName()} подгорает!`);
        } else if (this.canUseAbility()) {
            const damage = this.calculateDamage();
            opponent.takeDamage(damage);
            this.useIceArrows(opponent);
            this.fireArrowsActive = false;
            Logger.log(`(${this.getClassName()}) ${this.name} использует ледяные стрелы и наносит ${damage} урона ${opponent.getName()}!`);
        } else {
            this.attack(opponent); 
        }
    }

    attack(opponent: Hero): void {
        const damage = this.calculateDamage(); 
        opponent.takeDamage(damage);
        Logger.log(`(${this.getClassName()}) ${this.name} стреляет в (${opponent.getClassName()}) ${opponent.getName()} на ${damage} урона!`);

        this.applyIceArrowDamage(opponent);
    }

    applyFireArrowsDamage(): void {
        if (this.fireArrowsActive && this.fireArrowsTarget && this.fireArrowsTarget.isAlive()) {
            const damage = 5; 
            this.fireArrowsTarget.takeDamage(damage);
            Logger.log(`Огненные стрелы (${this.getClassName()}) ${this.name} наносят ${damage} урона (${this.fireArrowsTarget.getClassName()}) ${this.fireArrowsTarget.getName()}!`);
        }
    }

    protected getMaxIceArrowsUses(): number {
        return 2; 
    }

    protected canUseAbility(): boolean {
        return this.iceArrowsUsed < this.getMaxIceArrowsUses();
    }
}
import { Logger } from './Logger';

export abstract class Hero {
    protected health: number;
    protected strength: number;
    protected name: string;
    protected iceArrowsUsed: number = 0;
    protected iceArrowDamage: number = 0;
    protected iceArrowTurns: number = 0;
    private charmed: boolean = false;

    constructor(health: number, strength: number, name: string) {
        this.health = Math.round(health);
        this.strength = Math.round(strength);
        this.name = name;
    }

    abstract attack(opponent: Hero): void;
    abstract useAbility(opponent: Hero): void;

    takeDamage(damage: number): void {
        this.health -= Math.round(damage);
        if (this.health < 0) this.health = 0;
    }

    isAlive(): boolean {
        return this.health > 0;
    }

    getName(): string {
        return this.name;
    }

    getHealth(): number {
        return this.health;
    }

    getStrength(): number {
        return this.strength;
    }

    useIceArrows(opponent: Hero): void {
        if (this.iceArrowsUsed < this.getMaxIceArrowsUses()) {
            this.iceArrowsUsed++;
            this.iceArrowDamage += 9;
            this.iceArrowTurns = 3;
            Logger.log(`(${this.getClassName()}) ${this.name} использует ледяные стрелы!`);
        } else {
            Logger.log(`(${this.getClassName()}) ${this.name} больше не может использовать ледяные стрелы.`);
        }
    }

    protected getMaxIceArrowsUses(): number {
        return 1;
    }

    protected applyIceArrowDamage(opponent: Hero): void {
        if (this.iceArrowDamage > 0) {
            const damage = Math.round(this.iceArrowDamage);
            opponent.takeDamage(damage);
            Logger.log(`(${this.getClassName()}) ${this.name} наносит ${damage} урона ледяными стрелами по ${opponent.getName()}!`);
            this.iceArrowTurns--;
            if (this.iceArrowTurns <= 0) {
                this.iceArrowDamage = 0;
            }
        }
    }

    public getClassName(): string {
        return (this.constructor as any).className;
    }

    skipNextTurn(): void {
        this.charmed = true;
    }

    isCharmed(): boolean {
        return this.charmed;
    }

    resetCharm(): void {
        this.charmed = false;
    }

    resetAbilities(): void {
        this.iceArrowsUsed = 0;
        this.iceArrowDamage = 0;
        this.iceArrowTurns = 0;
        this.charmed = false;
    }

    skipTurn(): void {
        if (this.isCharmed()) {
            Logger.log(`(${this.getClassName()}) ${this.name} стоит и страдает.`);
            this.resetCharm(); 
        }
    }

    protected calculateDamage(): number {
        return this.strength + this.iceArrowDamage;
    }

    protected canUseAbility(): boolean {
        return true; 
    }
}
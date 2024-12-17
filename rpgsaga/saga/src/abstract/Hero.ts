export abstract class Hero {
    protected health: number;
    protected strength: number;
    protected readonly name: string;

    constructor(name: string, health: number, strength: number) {
        this.name = name;
        this.health = health;
        this.strength = strength;
    }

    abstract attack(target: Hero, useAbility?: boolean): void;

    public getName(): string {
        return this.name;
    }

    public getHealth(): number {
        return this.health;
    }

    protected takeDamage(damage: number): void {
        this.health = Math.max(this.health - damage, 0);
    }
}

export class Knight extends Hero {
    attack(target: Hero, useAbility: boolean = false): void {
        let damage = this.strength;
        if (useAbility) {
            damage = Math.floor(this.strength * 1.3);
            Logger.log(`${this.name} uses Vengeance Strike!`);
        }
        target.takeDamage(damage);
        Logger.log(`${this.name} deals ${damage} damage to ${target.getName()}`);
    }
}

export class Mage extends Hero {
    private isStunned: boolean = false;

    attack(target: Hero, useAbility: boolean = false): void {
        if (useAbility) {
            this.isStunned = true;
            Logger.log(`${this.name} uses Charm! ${target.getName()} misses next turn.`);
        } else {
            target.takeDamage(this.strength);
            Logger.log(`${this.name} deals ${this.strength} damage to ${target.getName()}`);
        }
    }

    public isImmuneToFreeze(): boolean {
        return true;
    }
}

export class Archer extends Hero {
    private burnTurns: number = 0;

    attack(target: Hero, useAbility: boolean = false): void {
        if (useAbility && this.burnTurns === 0) {
            this.burnTurns = 3;
            Logger.log(`${this.name} uses Flaming Arrows! ${target.getName()} is burning.`);
        } else {
            target.takeDamage(this.strength);
            Logger.log(`${this.name} deals ${this.strength} damage to ${target.getName()}`);
        }
    }
}

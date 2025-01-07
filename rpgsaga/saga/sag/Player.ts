export abstract class Player {
    name: string;
    health: number;
    strength: number;

    constructor(name: string, health: number, strength: number) {
        this.name = name;
        this.health = health;
        this.strength = strength;
    }

    abstract useAbility(opponent: Player): void;

    takeDamage(damage: number): void {
        this.health -= damage;
        if (this.health < 0) this.health = 0;
    }

    isAlive(): boolean {
        return this.health > 0;
    }
}
import { Weapon } from "./weapon";

export abstract class Player {
    private _name: string;
    private _health: number;
    private _mana: number;
    private _weapon: Weapon;

    constructor(name:string, health: number, mana: number, weapon: Weapon) {
        this._name = name;
        this._health = health;
        this._mana = mana;
        this._weapon = weapon;
    }
    protected set health(value) {
        this._health = value;
      } 

    public get name(): string {
        return this._name;
    }
    
    public get health(): number {
        return this._health;
    }

    public get mana(): number {
        return this._mana;
    }

    public get weapon(): Weapon {
        return this._weapon;
    }

    public damagedBy(attacker: Player): void {
        if (this.health <= 0 || attacker.health <= 0) {
            return;
        }
        this.health = this.health - attacker.weapon.damageAmount;
        console.log(`${attacker.name} нанес ${this.name} ${attacker.weapon.damageAmount} урона`);
        if (this.health <= 0) {
            console.log(`${this.name} умер`);
        }
    }
} 
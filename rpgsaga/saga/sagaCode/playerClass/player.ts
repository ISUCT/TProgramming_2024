import { Abilities } from "../abilities/abilities";
import { Weapon } from "../weapon";

export abstract class Player {
    private _name: string;
    private _health: number;
    private _mana: number;
    private _weapon: Weapon;
    private _abilities: Abilities;
    private _abilStatus: boolean;
    private _isAlive: boolean;

    constructor(name:string, health: number, mana: number, weapon: Weapon) {
        this._name = name;
        this._health = health;
        this._mana = mana;
        this._weapon = weapon;
        this._isAlive = true;
    }
    protected set health(value) {
        this._health = value;
      }

    public get abilityUsed(): boolean {
        return this._abilStatus;
    }
      
    public get name(): string {
        return this._name;
    }
    
    public get isAlive() {
        return this._isAlive;
      }
      protected set isAlive(alive: boolean) {
        this._isAlive = alive;
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

    public addAbility(ability: Abilities): void {
        this._abilities = ability;
    }

//     public damagedBy(attacker: Player): void {
//         if (this.health <= 0 || attacker.health <= 0) {
//             return;
//         }
//         this.health = this.health - attacker.weapon.damageAmount;
//         console.log(`${attacker.name} нанес ${this.name} ${attacker.weapon.damageAmount} урона`);
//         if (this.health <= 0) {
//             console.log(`${this.name} умер`);
//             this._isAlive === false;
//         }
//     }
// } 

    public damaged(damageAmount: number) {
        this.health -= this.weapon.damageAmount;
        if (this.health <= 0) {
            this.isAlive === false;
            console.log(`Персонаж ${this.name} умер`)

        }
    }
}
import { Weapon } from "../weapon";
import { Effect } from "../effectOfDamage/effect";

export abstract class Player {
    private _name: string;
    private _health: number;
    private _maxHealth: number;
    private _weapon: Weapon;
    private _statusEffect: number;
    private _activeEffect: Effect;

    constructor(name:string, health: number,weapon: Weapon, statusEffect: number) {
        this._name = name;
        this._health = health;
        this._maxHealth = health;
        this._weapon = weapon;
        this._statusEffect = statusEffect;
    }
    public set health(value: number) {
        this._health = value;
      }

      public get maxHealth(): number {
        return this._maxHealth;
    }

    public get activeEffect(): Effect {
        return this._activeEffect;
    }

    public set activesEffect(effect: Effect) {
        this._activeEffect = effect;
    }

    public get statusEffect(): number {
        return this._statusEffect;
    }

    public set statusOfEffect(effectStatus: number) {
        this._statusEffect = effectStatus
    }

    public statusEffectDown(): void {
        this._statusEffect--;
    }

      
    public get name(): string {
        return this._name;
    }
    
    public isAlive(): boolean {
        return this.health > 0;
    }
    
    public get health(): number {
        return this._health;
    }

    public get weapon(): Weapon {
        return this._weapon;
    }

    public damaged(damage: number) {
        this.health -= damage;
        console.log(`${this.name} получает ${damage} урона. Текущее здоровье: ${this.health}`)
        if (this.isAlive() === false) {
            console.log(`Персонаж ${this.name} погиб!`);
        }
    }

    public attack(enemy: Player): string {
        if (this.isAlive) {
            enemy.damaged(this.weapon.damageAmount);
          return `(${this.name}) наносит урон ${this.weapon.damageAmount} противнику (${enemy.name}) ${enemy.name}`;
        } 
      }

    public applyArrowEffect() {
        if (this._activeEffect) {
          this._activeEffect.applyEffect(this);
        }  

 }
}
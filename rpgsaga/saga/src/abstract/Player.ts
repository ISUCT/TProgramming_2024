import { Logger } from '../utils/output/Logger';

export abstract class Player {
  protected _health: number;
  protected _strength: number;
  protected _name: string;
  protected _className: string;
  isAlive: boolean = true;

  constructor(gamerHealth: number, gamerStrength: number, gamerName: string) {
    this.health = gamerHealth;
    this.strength = gamerStrength;
    this._name = gamerName;
  }

  public get health(): number {
    return this._health;
  }

  public set health(newHP: number) {
    if (newHP < 0 || newHP > 100) {
      throw new Error('Недопустимый показатель здоровья');
    } else {
      this._health = newHP;
    }
  }

  public get strength(): number {
    return this._strength;
  }

  public set strength(newStrength: number) {
    if (newStrength < 0) {
      throw new Error('Недопустимый показатель силы');
    } else {
      this._strength = newStrength;
    }
  }

  public get name(): string {
    return this._name;
  }

  public get className(): string {
    return this._className;
  }

  public abstract attack(opponent: Player): void;

  public takeDamage(damage: number): void {
    this._health -= damage;
    if (this._health <= 0) {
      this.isAlive = false;
      Logger.log(`(${this.className}) ${this._name} погибает`);
    }
  }

  public allowToAttack(): boolean {
    return this.isAlive;
  }
}

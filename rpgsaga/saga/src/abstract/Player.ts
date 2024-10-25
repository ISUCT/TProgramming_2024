import { Logger } from '../utils/output/Logger';

export abstract class Player {
  protected health: number;
  protected strength: number;
  protected name: string;
  protected className: string;
  isAlive: boolean = true;

  constructor(gamerHealth: number, gamerStrength: number, gamerName: string) {
    this.health = gamerHealth;
    this.strength = gamerStrength;
    this.name = gamerName;
  }

  public get healthPoints(): number {
    return this.health;
  }

  public set healthPoints(newHP: number) {
    if (newHP < 0 || newHP > 100) {
      throw new Error('Недопустимый показатель здоровья');
    } else {
      this.health = newHP;
    }
  }

  public get strengthPoints(): number {
    return this.strength;
  }

  public set strengthPoints(newStrength: number) {
    if (newStrength < 0) {
      throw new Error('Недопустимый показатель силы');
    } else {
      this.strength = newStrength;
    }
  }

  public get playerName(): string {
    return this.name;
  }

  public get playerClassName(): string {
    return this.className;
  }

  public abstract attack(opponent: Player): void;

  public takeDamage(damage: number): void {
    this.health -= damage;
    if (this.health <= 0) {
      this.isAlive = false;
      Logger.log(`(${this.className}) ${this.name} погибает`);
    }
  }

  public allowToAttack(): boolean {
    return this.isAlive;
  }
}

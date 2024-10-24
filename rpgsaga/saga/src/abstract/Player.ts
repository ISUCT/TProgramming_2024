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

  public getHealth(): number {
    return this.health;
  }

  public getStrength(): number {
    return this.strength;
  }

  public getName(): string {
    return this.name;
  }

  getClassName(): string {
    return this.className;
  }

  public abstract attack(opponent: Player): void;

  public takeDamage(damage: number): void {
    this.health -= damage;
    if (this.health <= 0) {
      this.isAlive = false;
      Logger.log(`(${this.getClassName()}) ${this.name} погибает`);
    }
  }

  public allowToAttack(): boolean {
    return this.isAlive;
  }
}

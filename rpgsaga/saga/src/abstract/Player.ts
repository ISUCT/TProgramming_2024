import { ISkills } from '../skills/ISkills';
import { getRandomArrayElement } from '../utils/randomization/getRandomArrayElement';

export abstract class Player {
  protected health: number;
  protected strength: number;
  protected name: string;
  protected className: string;
  protected isAlive: boolean = true;
  protected skillUsed: boolean = false;
  protected skills: ISkills[] = [];
  protected isCharmed: boolean = false;

  constructor(gamerHealth: number, gamerStrength: number, gamerName: string) {
    this.health = gamerHealth;
    this.strength = gamerStrength;
    this.name = gamerName;
  }

  public get healthPoints(): number {
    return this.health;
  }

  public set healthPoints(newHealthPoints: number) {
    this.health = newHealthPoints;
  }

  public get strengthPoints(): number {
    return this.strength;
  }

  public set strengthPoints(newStrengthPoints: number) {
    this.strength = newStrengthPoints;
  }

  public get playerName(): string {
    return this.name;
  }

  public get playerClassName(): string {
    return this.className;
  }

  public get isAlivePlayer(): boolean {
    return this.isAlive;
  }

  public get playerSkillUsed(): boolean {
    return this.skillUsed;
  }

  public set playerSkillUsed(value: boolean) {
    this.skillUsed = value;
  }

  public addSkill(skill: ISkills): void {
    this.skills.push(skill);
  }

  public abstract attack(opponent: Player): string;

  public useSkill(opponent: Player): string | null {
    if (this.skills.length === 0) return null;

    const availableSkills = this.skills.filter(skill => skill.isAvailable);
    if (availableSkills.length === 0) return null;

    const skill = getRandomArrayElement(availableSkills);
    this.skillUsed = true;
    const damageDealt = skill.effect(opponent);
    let message = `(${this.playerClassName}) ${this.playerName} использует (${skill.name}) на (${opponent.playerClassName}) ${opponent.playerName}`;
    if (damageDealt > 0) {
      message += ` и наносит урон ${damageDealt}`;
    }
    return message;
  }

  public takeDamage(damage: number): string {
    this.health -= damage;
    if (this.health <= 0) {
      this.isAlive = false;
      return `(${this.playerClassName}) ${this.playerName} погибает`;
    }
  }

  public gettingCharmed(value: boolean): void {
    this.isCharmed = value;
  }
}

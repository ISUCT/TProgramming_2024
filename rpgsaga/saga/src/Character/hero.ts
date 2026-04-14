import { Ability } from './ability';
import { randomArrayElement } from './Functions/randomArrayElement';

export abstract class Hero {
  protected name: string;
  protected className?: string;
  protected maxHealth: number;
  protected health: number;
  protected maxStrength: number;
  protected strength: number;
  protected abilities: Ability[];
  protected currentAbility?: Ability;
  protected abilityBuff: number = 0;
  protected isAbilityUsed: boolean = false;
  protected isAlive: boolean = true;
  protected skipingTurns: number = 0;

  constructor(
    heroHealth: number,
    heroStrength: number,
    heroName: string,
    heroAbilities: Ability[],
  ) {
    this.maxHealth = heroHealth;
    this.health = this.maxHealth;
    this.maxStrength = heroStrength;
    this.strength = this.maxStrength;
    this.name = heroName;
    this.abilities = heroAbilities;
  }

  public get getClassName(): string | undefined {
    return this.className;
  }

  public get getName(): string {
    return this.name;
  }

  public get getIsAlive(): boolean {
    return this.isAlive;
  }

  public get getIsAbilityUsed(): boolean {
    return this.isAbilityUsed;
  }

  public get getHealth(): number {
    return this.health;
  }

  public get getStrength(): number {
    return this.strength;
  }

  public get getMaxHealth(): number {
    return this.maxHealth;
  }

  public get getMaxStrength(): number {
    return this.maxStrength;
  }

  public get getSkipTurns(): number {
    return this.skipingTurns;
  }

  public get getCurrentAbility(): Ability | undefined {
    return this.currentAbility;
  }

  public get getAbilities(): Ability[] {
    return this.abilities;
  }

  public choseAbility(): void {
    this.currentAbility = randomArrayElement(this.abilities);
  }

  public useAbility(opponent: Hero, abilityName: string | null = null): void {
    if (this.abilities.length === 0) {
      return;
    }

    if (abilityName !== null) {
      this.abilities.forEach(ability => {
        if (ability.name === abilityName.toLowerCase()) {
          this.currentAbility = ability;
          return;
        }
      });
    }

    if (this.currentAbility !== undefined && this.currentAbility.usageCount > 0) {
      if (this.currentAbility.effect) {
        this.currentAbility.effect(this, opponent);
      }
      this.currentAbility.usageCount--;
      this.abilities.forEach(ability => {
        if (ability.name === this.currentAbility!.name) {
          ability.usageCount--;
        }
      });
      this.isAbilityUsed = true;
    }
  }

  public attack(opponent: Hero): number {
    if (this.getSkipTurns > 0) {
      this.skipingTurns--;
      return;
    }

    if (this.currentAbility) {
      const abilityIndex = this.abilities.findIndex(ability => ability.name === this.currentAbility!.name);

      if (abilityIndex !== -1) {
        this.abilities[abilityIndex].isUsed = true;
        this.updateAbilities();
      }

      return opponent.takeDamage(this.strength, this.currentAbility);
    } else {
      return opponent.takeDamage(this.strength);
    }
  }

  protected updateAbilities(): void {
    for (const ability of this.abilities) {
      if (ability.isUsed) {
        if (ability.turns! <= 0) {
          if (ability.buff) {
            this.strength -= ability.buff.strength;
          }
          ability.isUsed = false;
          ability.turns = ability.maxTurns;
        }
        ability.turns--;
      }
    }
  }

  public takeDamage(damage: number, ability: Ability | undefined = undefined): number {
    let currentDamage: number = damage;
    if (ability !== undefined && ability.buff) {
      currentDamage += ability.buff.strength;
    }
    this.health -= currentDamage;
    if (this.health <= 0) {
      this.health = 0;
      this.isAlive = false;
    }
    return currentDamage;
  }

  public heal(amount: number) {
    if (this.health + amount > this.maxHealth) {
      this.health = this.maxHealth;
    } else {
      this.health = this.health + amount;
    }
  }

  public reset(): void {
    this.health = this.maxHealth;
    this.strength = this.maxStrength;
    this.isAbilityUsed = false;
    this.abilities.forEach(ability => {
      ability.usageCount = ability.maxAbilityUsage;
      ability.isUsed = false;
      ability.turns = ability.maxTurns;
    });
  }

  public skipTurns(value: number): void {
    this.skipingTurns = value;
  }
}

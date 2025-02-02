import { IAbility } from '../Ability/Ability';
import { getRandomArrayElement } from '../utils/random/Random';

export abstract class Character {
  protected nameProtected: string;
  protected classNameProtected: string;
  protected maxHealthProtected: number;
  protected healthProtected: number;
  protected maxStrengthProtected: number;
  protected strengthProtected: number;
  protected abilitiesProtected: IAbility[];
  protected currentAbilityProtected?: IAbility;
  protected isAbilityUsedProtected: boolean = false;
  protected countOfSkipingTurnsProtected: number = 0;

  constructor(
    characterHealth: number,
    characterStrength: number,
    characterName: string,
    characterAbylities: IAbility[],
  ) {
    this.maxHealthProtected = characterHealth;
    this.healthProtected = this.maxHealth;
    this.maxStrengthProtected = characterStrength;
    this.strengthProtected = this.maxStrength;
    this.nameProtected = characterName;
    this.abilitiesProtected = characterAbylities;
  }

  // Акцессоры
  public get name(): string {
    return this.nameProtected;
  }

  public get className(): string | undefined {
    /* string | undefined */
    return this.classNameProtected;
  }

  public get maxHealth(): number {
    return this.maxHealthProtected;
  }

  public get health(): number {
    return this.healthProtected;
  }

  public get maxStrength(): number {
    return this.maxStrengthProtected;
  }

  public get strength(): number {
    return this.strengthProtected;
  }

  public get abilities(): IAbility[] {
    return this.abilitiesProtected;
  }

  public get currentAbility(): IAbility | undefined {
    return this.currentAbilityProtected;
  }

  public get isAbilityUsed(): boolean {
    return this.isAbilityUsedProtected;
  }

  public get countOfSkipingTurns(): number {
    return this.countOfSkipingTurnsProtected;
  }
  public choseAbility(): void {
    this.currentAbilityProtected = getRandomArrayElement(this.abilities);
  }

  public useAbility(opponent: Character, abilityName: string | null = null): void {
    if (this.abilities.length === 0) {
      return;
    }

    if (abilityName !== null) {
      this.abilities.forEach(ability => {
        if (ability.name === abilityName.toLowerCase()) {
          this.currentAbilityProtected = ability;
          return;
        }
      });
    }

    if (this.currentAbilityProtected !== undefined && this.currentAbilityProtected.usageCount > 0) {
      if (this.currentAbilityProtected.effect) {
        this.currentAbilityProtected.effect(this, opponent);
      }
      this.currentAbilityProtected.usageCount--;
      this.abilities.forEach(ability => {
        if (ability.name === this.currentAbilityProtected!.name) {
          ability.usageCount--;
        }
      });
      this.isAbilityUsedProtected = true;
    }
  }

  public attack(opponent: Character): number {
    if (this.countOfSkipingTurns > 0) {
      this.countOfSkipingTurnsProtected--;
      return;
    }

    if (this.currentAbilityProtected) {
      const abilityIndex = this.abilitiesProtected.findIndex(
        ability => ability.name === this.currentAbilityProtected!.name,
      );

      if (abilityIndex !== -1) {
        this.abilitiesProtected[abilityIndex].isUsed = true;
        this.updateAbilitiesProtected();
      }

      return opponent.damage(this.strengthProtected, this.currentAbilityProtected);
    } else {
      return opponent.damage(this.strengthProtected);
    }
  }

  protected updateAbilitiesProtected(): void {
    for (const ability of this.abilitiesProtected) {
      if (ability.isUsed) {
        if (ability.turns! <= 0) {
          if (ability.buff) {
            this.strengthProtected -= ability.buff.strength;
          }
          ability.isUsed = false;
          ability.turns = ability.maxTurns;
        }
        ability.turns--;
      }
    }
  }

  public damage(damage: number, ability: IAbility | undefined = undefined): number {
    let currentDamage: number = damage;
    if (ability !== undefined && ability.buff) {
      currentDamage += ability.buff.strength;
    }
    this.healthProtected -= currentDamage;
    if (this.healthProtected <= 0) {
      this.healthProtected = 0;
    }
    return currentDamage;
  }

  public heal(amount: number) {
    if (this.healthProtected + amount > this.maxHealth) {
      this.healthProtected = this.maxHealth;
    } else {
      this.healthProtected = this.healthProtected + amount;
    }
  }

  public reset(): void {
    this.healthProtected = this.maxHealth;
    this.strengthProtected = this.maxStrength;
    this.isAbilityUsedProtected = false;
    this.abilitiesProtected.forEach(ability => {
      ability.usageCount = ability.maxAbilityUsage;
      ability.isUsed = false;
      ability.turns = ability.maxTurns;
    });
  }

  public skipTurns(value: number): void {
    this.countOfSkipingTurnsProtected = value;
  }

  // Получение всех данных о классе
  public toString() {
    console.log(
      `Name: ${this.name}, \nClass: ${this.className}, \nHealth: ${this.health}, \nStrength: ${this.strength}.\n`,
    );
  }
}

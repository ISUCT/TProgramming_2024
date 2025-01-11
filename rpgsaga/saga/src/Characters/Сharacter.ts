import { IAbility } from '../Ability/Ability';
import { getRandomArrayElement } from '../utils/random/Random';

export abstract class Character {
  protected _name: string;
  protected _className: string;
  protected _maxHealth: number;
  protected _health: number;
  protected _maxStrength: number;
  protected _strength: number;
  protected _abilities: IAbility[];
  protected _currentAbility?: IAbility;
  protected _isAbilityUsed: boolean = false;
  protected _countOfSkipingTurns: number = 0;

  constructor(
    characterHealth: number,
    characterStrength: number,
    characterName: string,
    characterAbylities: IAbility[],
  ) {
    this._maxHealth = characterHealth;
    this._health = this.maxHealth;
    this._maxStrength = characterStrength;
    this._strength = this.maxStrength;
    this._name = characterName;
    this._abilities = characterAbylities;
  }

  // Акцессоры
  public get name(): string {
    return this._name;
  }

  public get className(): string | undefined {
    /* string | undefined */
    return this._className;
  }

  public get maxHealth(): number {
    return this._maxHealth;
  }

  public get health(): number {
    return this._health;
  }

  public get maxStrength(): number {
    return this._maxStrength;
  }

  public get strength(): number {
    return this._strength;
  }

  public get abilities(): IAbility[] {
    return this._abilities;
  }

  public get currentAbility(): IAbility | undefined {
    return this._currentAbility;
  }

  public get isAbilityUsed(): boolean {
    return this._isAbilityUsed;
  }

  public get countOfSkipingTurns(): number {
    return this._countOfSkipingTurns;
  }
  public choseAbility(): void {
    this._currentAbility = getRandomArrayElement(this.abilities);
  }

  public useAbility(opponent: Character, abilityName: string | null = null): void {
    if (this.abilities.length === 0) {
      return;
    }

    if (abilityName !== null) {
      this.abilities.forEach(ability => {
        if (ability.name === abilityName.toLowerCase()) {
          this._currentAbility = ability;
          return;
        }
      });
    }

    if (this._currentAbility !== undefined && this._currentAbility.usageCount > 0) {
      if (this._currentAbility.effect) {
        this._currentAbility.effect(this, opponent);
      }
      this._currentAbility.usageCount--;
      this.abilities.forEach(ability => {
        if (ability.name === this._currentAbility!.name) {
          ability.usageCount--;
        }
      });
      this._isAbilityUsed = true;
    }
  }

  public attack(opponent: Character): number {
    if (this.countOfSkipingTurns > 0) {
      this._countOfSkipingTurns--;
      return;
    }

    if (this._currentAbility) {
      const abilityIndex = this._abilities.findIndex(ability => ability.name === this._currentAbility!.name);

      if (abilityIndex !== -1) {
        this._abilities[abilityIndex].isUsed = true;
        this._updateAbilities();
      }

      return opponent.damage(this._strength, this._currentAbility);
    } else {
      return opponent.damage(this._strength);
    }
  }

  protected _updateAbilities(): void {
    for (const ability of this._abilities) {
      if (ability.isUsed) {
        if (ability.turns! <= 0) {
          if (ability.buff) {
            this._strength -= ability.buff.strength;
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
    this._health -= currentDamage;
    if (this._health <= 0) {
      this._health = 0;
    }
    return currentDamage;
  }

  public heal(amount: number) {
    if (this._health + amount > this.maxHealth) {
      this._health = this.maxHealth;
    } else {
      this._health = this._health + amount;
    }
  }

  public reset(): void {
    this._health = this.maxHealth;
    this._strength = this.maxStrength;
    this._isAbilityUsed = false;
    this._abilities.forEach(ability => {
      ability.usageCount = ability.maxAbilityUsage;
      ability.isUsed = false;
      ability.turns = ability.maxTurns;
    });
  }

  public skipTurns(value: number): void {
    this._countOfSkipingTurns = value;
  }

  // Получение всех данных о классе
  public toString() {
    console.log(
      `Name: ${this.name}, \nClass: ${this.className}, \nHealth: ${this.health}, \nStrength: ${this.strength}.\n`,
    );
  }
}

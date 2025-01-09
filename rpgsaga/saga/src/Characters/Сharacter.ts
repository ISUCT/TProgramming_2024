import { IAbility } from "../Interfaces/Ability";

export abstract class Character {
  protected _name: string;
  protected _class: string;
  protected _initialHealth: number;
  protected _health: number;
  protected _initialStrength: number;
  protected _strength: number;
  protected _abilities: IAbility[];
  protected _currentAdility?: IAbility;
  // protected _skillBuff: number = 0;
  protected _isAbilityUsed: boolean = false;
  // protected _isAlive: boolean = true;
  protected _countOfSkipingTurns: number = 0;
  // protected _weapon: IWeapon;

  constructor(
    characterName: string,
    characterHealth: number,
    characterStrength: number,
    characterAbylities: IAbility
  ) {
    this._initialHealth = characterHealth;
    this._health = this._initialHealth;
    this._initialStrength = characterStrength;
    this._strength = this._initialStrength;
    this._name = characterName;
    // this._weapon = characterWeapon;
    this._abilities = characterAbylities;
  }

  // Получить имя персонажа (акцессор)
  public get name(): string {
    return `${this._name}`;
  }

  // Получить класс персонажа
  public get class(): string {
    return `${this._class}`;
  }

  //  Получить здоровье
  public get health(): number {
    return this._health;
  }

  // Получить силу
  public get strength(): number {
    return this._strength;
  }

  // Получение всех данных о классе
  public toString() {
    console.log(
      `Name: ${this.name}, \nClass: ${this.class}, \nHealth: ${this.health}, \nStrength: ${this.strength}.\n`,
    );
  }

  public attack() {
    console.log('Ваш герой совершил атаку!');
  }
}

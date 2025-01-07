export abstract class Character {
  private _name: string;
  private _class: string;
  private _health: number;
  private _strength: number;
  // private _immunity: string[] = [];

  constructor(
    characterName: string,
    characterClass: string,
    characterHealth: number,
    characterStrength: number /* , characterImmunity: string*/,
  ) {
    this._name = characterName;
    this._class = characterClass;
    this._health = characterHealth;
    this._strength = characterStrength;
    // this._immunity = characterImmunity;
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

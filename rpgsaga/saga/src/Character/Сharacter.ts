export abstract class Character {
  private _name: string;
  private _class: string;
  private _mana: number;
  private _health: number;
  private _strength: number;
  // private _immunity: string[] = [];

  constructor(
    characterName: string,
    characterClass: string,
    characterMana: number,
    characterHealth: number,
    characterStrength: number /* , characterImmunity: string*/,
  ) {
    this._name = characterName;
    this._class = characterClass;
    this._mana = characterMana;
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

  // Получить уровень маны персонажа
  public get mana(): number {
    return this._mana;
  }

  //  Получить здоровье
  public get health(): number {
    return this._health;
  }

  // Получить силу
  public get strength(): number {
    return this._strength;
  }

  // (мутаторы)
  public set name(newName: string) {
    this._name = newName;
  }

  public set class(newClass: string) {
    this._class = newClass;
  }

  public set mana(newMana: number) {
    if (newMana > 0) {
      this._mana = newMana;
      return;
    }
    throw new Error('Level out of range');
  }

  public set strength(newStrength: number) {
    if (newStrength > 0) {
      this._strength = newStrength;
      return;
    }
    throw new Error('Level out of range');
  }

  public set health(newMana: number) {
    if (newMana > 0) {
      this._mana = newMana;
      return;
    }
    throw new Error('Level out of range');
  }

  // Получение всех данных о классе
  public toString() {
    console.log(`Name: ${this.name}, class: ${this.class}, mana: ${this.mana}, health: ${this.health}, strength: ${this.strength}`);
  }

  public attack() {
    console.log('Ваш герой совершил атаку!');
  }
}

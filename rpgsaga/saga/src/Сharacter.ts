export class Character {
  private _name: string;
  private _class: string;
  private _level: number = 1;

  // Получить имя персонажа
  get name(): string {
    return `${this._name}`;
  }

  // Получить класс персонажа
  get class(): string {
    return `${this._class}`;
  }

  // Получить уровень персонажа
  get level(): number {
    return this._level;
  }

  // setName()

  // setClass()

  set level(level: number) {
    if (level > 0) {
      this._level = level;
      return;
    }
    throw new Error('Level out of range');
  }

  constructor(characterName: string, characterClass: string);

  constructor(characterName: string, characterClass: string, characterLevel?: number) {
    this._name = characterName;
    this._class = characterClass;
    this._level = characterLevel;
  }
}

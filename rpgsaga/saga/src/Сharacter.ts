export class Character {
  private _name: string;
  private _class: string;
  private _level: number = 1;

  constructor(characterName: string, characterClass: string, characterLevel: number) {
    this._name = characterName;
    this._class = characterClass;
    this.level = characterLevel;
  }

  // Получить имя персонажа (акцессор)
  public get name(): string {
    return `${this._name}`;
  }

  // Получить класс персонажа
  public get class(): string {
    return `${this._class}`;
  }

  // Получить уровень персонажа
  public get level(): number {
    return this._level;
  }
  // (мутаторы)
  public set name(newName: string) {
    this._name = newName;
  }

  public set class(newClass: string) {
    this._class = newClass;
  }

  // Изменить уровень персонажа
  public set level(level: number) {
    if (level > 0) {
      this._level = level;
      return;
    }
    throw new Error('Level out of range');
  }
}

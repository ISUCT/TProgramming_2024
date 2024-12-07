const WRONG_COLOR_FORMAT = new Error('Wrong color format');

export abstract class Animal {
  private _name: string;
  private _color: string;
  private _birthDate: Date;

  constructor(name: string, birthdate: Date, color: string) {
    this._name = name;
    this._birthDate = birthdate;
    this.color = color;
  }

  get name(): string {
    return this._name;
  }

  set name(val: string) {
    this._name = val;
  }

  get color(): string {
    return this._color;
  }

  set color(val: string) {
    if (val.length !== 6) {
      throw WRONG_COLOR_FORMAT;
    }

    for (const letterIndex of val) {
      const char = letterIndex.codePointAt(0);
      if ((char < 48 || char > 57) && (char < 97 || char > 102)) {
        throw WRONG_COLOR_FORMAT;
      }
    }

    this._color = val;
  }

  get birthDate() {
    return this._birthDate;
  }

  set birthDate(value: Date) {
    this._birthDate = value;
  }

  abstract getView(): string;
}

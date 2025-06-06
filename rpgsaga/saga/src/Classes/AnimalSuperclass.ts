export abstract class Animal {
  private _name: string;
  protected _age: number;
  private _color: string;
  private _gender: string;

  constructor(name: string, age: number, color: string, gender: string) {
    this._name = name;
    this._age = age;
    this._color = color;
    this._gender = gender;
  }

  abstract sound(): string;

  abstract set age(age: number);

  public set name(name: string) {
    this._name = name;
  }

  public set color(color: string) {
    this._color = color;
  }

  public set gender(gender: string) {
    if (gender.toLowerCase() === 'male') {
      this._gender = 'Male';
    } else if (gender.toLowerCase() === 'female') {
      this._gender = 'Female';
    } else {
      throw new Error('Invalid gender');
    }
  }

  abstract get age();

  public get name() {
    return this._name;
  }

  public get color() {
    return this._color;
  }

  public get gender() {
    return this._gender;
  }
}

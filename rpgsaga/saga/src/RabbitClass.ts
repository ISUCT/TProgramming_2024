export class Rabbit {
  private _name: string;
  private _age: number;
  private _color: string;
  private _gender: string;
  constructor(name: string, age: number, color: string, gender: string) {
    this._name = name;
    this._age = age;
    this._color = color;
    this._gender = gender;
  }

  public set name(name: string) {
    this._name = name;
  }
  public set age(age: number) {
    if (age < 0 || age > 9) {
      throw new Error('Invalid age');
    }
    this._age = age;
  }
  public set color(color: string) {
    this.color = color;
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
  public get age() {
    return this._age;
  }
  public get name() {
    return this._name;
  }
  public get gender() {
    return this._gender;
  }
  public get color() {
    return this._color;
  }
}

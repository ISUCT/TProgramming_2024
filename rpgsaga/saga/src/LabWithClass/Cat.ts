export class Cat {
  private _name: string;
  private _age: number;
  private _gender: string;
  private _male: string;
  constructor(name: string, age: number, gender: string, male: string) {
    this._name = name;
    this._age = age;
    this._gender = gender;
    this._male = male;
  }
  public set age(age: number) {
    if (age < 0) {
      throw new Error('Invalid age');
    }
    this._age = age;
    return;
  }
  public set name(name: string) {
    this._name = name;
    return;
  }
  public set gender(gender: string) {
    this._gender = gender;
    return;
  }
  public set male(male: string) {
    if (male === 'man' || male === 'women') {
      this._male = male;
      return;
    } else {
      throw new Error('Invalid male');
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
  public get male() {
    return this._male;
  }
}

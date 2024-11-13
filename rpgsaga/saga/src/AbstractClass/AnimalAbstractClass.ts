export enum Male {
  woman = 'woman',
  man = 'man',
}

export abstract class Animal {
  private _name: string;
  private _age: number;
  private _gender: string;

  constructor(name: string, age: number, gender: string) {
    this._name = name;
    this._age = age;
    this._gender = gender;
  }

  abstract makeSound(): string;

  public set age(age: number) {
    if (age < 0) {
      throw new Error('Invalid age');
    }
    this._age = age;
  }

  public set name(name: string) {
    this._name = name;
  }

  public set gender(gender: string) {
    this._gender = gender;
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

  toString(): string {
    return `Animal: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`;
  }
}

export abstract class Animal {
  protected _name: string;
  protected _age: number;
  protected _foodPreference: string;

  constructor(name: string, age: number, foodPreference: string) {
    this._name = name;
    this._age = age;
    this._foodPreference = foodPreference;
  }

  public get foodPreference(): string {
    return this._foodPreference;
  }

  public set foodPreference(newFoodPreference: string) {
    this._foodPreference = newFoodPreference;
  }

  public get age(): number {
    return this._age;
  }

  public set age(newAge: number) {
    if (newAge >= 0) {
      this._age = newAge;
    } else {
      throw new Error('Недопустимый возраст');
    }
  }

  public get name(): string {
    return this._name;
  }

  public set name(newName: string) {
    this._name = newName;
  }

  toString(): string {
    return `${this._name} ${this._age} ${this._foodPreference}`;
  }

  toNumber(): number {
    return this._age;
  }

  print(): string {
    return `name: ${this._name}\nage: ${this._age}`;
  }

  abstract printFoodPreference(): string;
}

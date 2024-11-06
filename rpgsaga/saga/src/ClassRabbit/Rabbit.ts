export class Rabbit {
  private _age: number;
  private _name: string;
  private _color: string;

  constructor(age: number, name: string, color: string) {
    console.log('Constructor for adding new Rabbit:');
    this._age = age;
    this._name = name;
    this._color = color;
  }

  set age(newAge: number) {
    if (newAge >= 0) {
      this._age = newAge;
      return;
    }
    throw new Error('age cant be below zero');
  }

  get age(): number {
    return this._age;
  }

  set color(newColor: string) {
    if (newColor !== '') {
      this._color = newColor;
      return;
    }
    throw new Error('string "color" cant be empty');
  }

  get color(): string {
    return this._color;
  }

  set name(newName: string) {
    if (newName !== '') {
      this._name = newName;
      return;
    }
    throw new Error('string "name" cant be empty');
  }

  get name(): string {
    return this._name;
  }
}

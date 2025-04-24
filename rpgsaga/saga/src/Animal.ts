export abstract class Animal {
  protected _name: string;
  protected _age: number;
  protected _sex: string;
  protected _color: string;

  constructor(name: string, age: number, sex: string, color: string) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.color = color;
  }

  get name(): string {
    return this._name;
  }

  get age(): number {
    return this._age;
  }

  get sex(): string {
    return this._sex;
  }

  get color(): string {
    return this._color;
  }

  set name(name: string) {
    if (name.length !== 0) {
      this._name = name;
      return;
    }
    throw new Error('This name is not correct');
  }

  set age(age: number) {
    if (age > 0) {
      this._age = age;
      return;
    }
    throw new Error('This age is not correct');
  }

  set sex(sex: string) {
    sex.toLowerCase();
    if (sex === 'female' || sex === 'male') {
      this._sex = sex;
      return;
    }
    throw new Error('Sex is not correct');
  }

  set color(color: string) {
    const colors: string[] = ['black', 'white', 'brown', 'pink'];
    if (colors.includes(color)) {
      this._color = color;
      return;
    }
    throw new Error('Color is not correct');
  }

  toString(): string {
    return `Name: ${this.name}, Age: ${this.age}, Sex: ${this.sex}, Color: ${this.color}`;
  }

  moves(): string {
    return `${this.name} the ${this.color} animal runs and grunts across the field`;
  }

  abstract luckyAnimal();

  abstract voice();
}

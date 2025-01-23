import { Animal } from './class_animal';

export class Bird extends Animal {
  private _canFly: boolean;

  constructor(name: string, age: number, sex: string, breed: string, canFly: boolean) {
    super(name, age, sex, breed);
    this._canFly = canFly;
  }

  get getCanFly(): boolean {
    return this._canFly;
  }

  set setCanFly(value: boolean) {
    this._canFly = value;
  }

  chirp(): string {
    return `${this.name} says: Chirp!`;
  }

  fly(): string {
    if (this._canFly) {
      return `${this.name} is flying!`;
    } else {
      return `${this.name} cannot fly.`;
    }
  }

  makeSound(): string {
    return this.chirp();
  }

  toString(): string {
    return `Bird [name = ${this.name}, age = ${this.age}, sex = ${this.sex}, breed = ${this.breed}, canFly = ${this._canFly}]`;
  }
}

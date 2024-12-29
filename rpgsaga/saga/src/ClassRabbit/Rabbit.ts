import { Animal } from './Animal';

export class Rabbit extends Animal {
  private _weight: number;

  constructor(age: number, name: string, color: string, weight: number) {
    super(age, name, color);
    this._weight = weight;
  }

  makeSound() {
    console.log('GAV GAV!!!');
  }

  set weight(newWeight: number) {
    if (newWeight >= 0) {
      this._weight = newWeight;
      return;
    }
    throw new Error('Weight cant be below zero');
  }

  get weight(): number {
    return this._weight;
  }

  toString(): string {
    return `Rabbit: { age: ${this.age}, name: ${this.name}, color: ${this.color}, weight: ${this._weight} }`;
  }
}

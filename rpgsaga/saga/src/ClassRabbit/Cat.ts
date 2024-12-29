import { Animal } from './Animal';

export class Cat extends Animal {
  private _breed: string;

  constructor(age: number, name: string, color: string, breed: string) {
    super(age, name, color);
    this._breed = breed;
  }
  makeSound(): void {
    console.log('meow :)');
  }

  set breed(newBreed: string) {
    if (newBreed !== '') {
      this._breed = newBreed;
      return;
    }
    throw new Error('string "breed" cant be empty');
  }

  get breed(): string {
    return this._breed;
  }

  toString(): string {
    return `Cat: { age: ${this.age}, name: ${this.name}, color: ${this.color}, breed: ${this._breed} }`;
  }
}

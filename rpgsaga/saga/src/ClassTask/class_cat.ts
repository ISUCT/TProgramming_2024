import { Animal } from './class_animal';

export class Cat extends Animal {
  private _isIndoorCat: boolean;

  constructor(name: string, age: number, sex: string, breed: string, isIndoorCat: boolean) {
    super(name, age, sex, breed);
    this._isIndoorCat = isIndoorCat;
  }

  get getIsIndoorCat(): boolean {
    return this._isIndoorCat;
  }

  set setIsIndoorCat(value: boolean) {
    this._isIndoorCat = value;
  }

  meow(): string {
    return `${this.name} says: Meow!`;
  }

  feedTheCat(amount: number): string {
    if (amount < 0) {
      throw new Error('You cannot enter a negative number of grams');
    }
    if (amount === 0) {
      throw new Error('You are not feeding a cat');
    }
    return `You gave ${this.name} ${amount} grams of food. Thank you!`;
  }

  renameTheCat(newName: string): string {
    const oldName = this.name;
    this.name = newName;
    return `${oldName} now named as ${newName}.`;
  }

  makeSound(): string {
    return this.meow();
  }

  toString(): string {
    return `Cat [name = ${this.name}, age = ${this.age}, sex = ${this.sex}, breed = ${this.breed}, isIndoorCat = ${this._isIndoorCat}]`;
  }
}

import { Animal } from './AnimalSuperclass';

export class Parrot extends Animal {
  private _vocabulary: number;
  constructor(name: string, age: number, color: string, gender: string, vocabulary: number) {
    super(name, age, color, gender);
    this._vocabulary = vocabulary;
  }

  public set age(age: number) {
    if (age < 0 || age > 52) {
      throw new Error('Invalid age');
    }
    this.age = age;
  }

  public set vocabulary(vocabulary: number) {
    if (vocabulary < 0 || vocabulary > 20) {
      throw new Error('Impossible vocabulary');
    }
    this._vocabulary = vocabulary;
  }

  public get vocabulary() {
    return this._vocabulary;
  }

  public get age() {
    return this._age;
  }

  sound(): string {
    return 'Chik-Chirik';
  }
  toString(): string {
    return `Parrot named ${this.name}, is ${this.age} years old,${this.gender} and ${this.color}, know ${this.vocabulary} words`;
  }
}

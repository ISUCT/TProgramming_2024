import { Animal } from './AnimalSuperclass';

export class Rabbit extends Animal {
  private _jump: number;
  constructor(name: string, age: number, color: string, gender: string, jump: number) {
    super(name, age, color, gender);
    this._jump = jump;
  }

  public set age(age: number) {
    if (age < 0 || age > 5) {
      throw new Error('Invalid age');
    }
    this.age = age;
  }

  public set jump(jump: number) {
    if (jump < 0 || jump > 2.7) {
      throw new Error('Impossible jump');
    }
    this._jump = jump;
  }

  public get age() {
    return this._age;
  }

  public get jump() {
    return this._jump;
  }

  sound(): string {
    return 'Purr-Purr';
  }
  toString(): string {
    return `Rabbit named ${this.name}, is ${this.age} years old,${this.gender} and ${this.color}, can jump ${this.jump} meters`;
  }
}

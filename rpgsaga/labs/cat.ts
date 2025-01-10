import { Idrawable } from './IDrawable';

export abstract class Cat implements Idrawable {
  private _name: string;
  private _age: number;
  protected meowrate: number;

  constructor(name: string, age: number, meowrate: number) {
    console.log('Constructor for Cat');
    this._name = name;
    this.age = age;
    this.meowrate = meowrate;
  }
  abstract display();
  meow(): void {
    console.log('meow'.repeat(this.meowrate));
  }

  get name(): string {
    return this._name;
  }

  get age(): number {
    return this._age;
  }

  set age(age: number) {
    if (age > 0 && age < 30) {
      this._age = age;
      return;
    }
    throw new Error('age out of range');
  }
}

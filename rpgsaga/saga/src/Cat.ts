import { Animal } from './Animal';

export class Cat extends Animal {
  constructor(name: string, age: number, sex: string) {
    super(name, age, sex);
  }

  commands(command: string): string {
    return `The cat ${this.name} does not know any command`;
  }

  routine(): string {
    return `The cat ${this.name} likes to sleep and she doesn't care about her master`;
  }

  voice(): string {
    return `${this.name} the cat says MEOW!`;
  }
}
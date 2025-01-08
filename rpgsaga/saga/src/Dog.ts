import { Animal } from './Animal';

export class Dog extends Animal {
  constructor(name: string, age: number, sex: string) {
    super(name, age, sex);
  }

  commands(command: string): string {
    if (command === 'sit') {
      return `${this.name} sits down`;
    } else if (command === 'stay') {
      return `${this.name} stays in place`;
    } else if (command === 'fetch stick') {
      return `${this.name} fetches the stick`;
    } else {
      return `The dog ${this.name} does not know such a command`;
    }
  }

  routine(): string {
    return `The dog ${this.name} loves to play and have fun with his master!`;
  }

  voice(): string {
    return `${this.name} the dog says WOOF!`;
  }
}

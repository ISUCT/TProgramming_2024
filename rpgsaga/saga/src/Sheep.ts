import { Animal } from './Animal';

export class Sheep extends Animal {
  constructor(name: string, age: number, sex: string, color: string) {
    super(name, age, sex, color);
  }

  moves(): string {
    return `${this.name} the ${this.color} sheep runs and grunts across the field`;
  }

  luckyAnimal(): string {
    if (this.name === 'Barash' && this.color === 'white') {
      return `${this.name} the ${this.color} sheep is lucky sheep`;
    } else {
      return `${this.name} the ${this.color} sheep is unlucky sheep`;
    }
  }

  voice(): string {
    return `${this.name} the ${this.color} sheep says be-e-e`;
  }
}

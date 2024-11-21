import { Animal } from './Animal';

export class Piggy extends Animal {
  constructor(name: string, age: number, sex: string, color: string) {
    super(name, age, sex, color);
  }

  moves(): string {
    return `${this.name} the ${this.color} pig runs and grunts across the field`;
  }

  luckyAnimal(): string {
    if (this.name === 'Nyusha' && this.color === 'pink') {
      return `${this.name} the ${this.color} pig is lucky pig`;
    } else {
      return `${this.name} the ${this.color} pig is unlucky pig`;
    }
  }

  voice(): string {
    return `${this.name} the ${this.color} pig says oink!`;
  }
}

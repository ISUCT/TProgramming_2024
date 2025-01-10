import { AToy } from './atoy';

export class Toy implements AToy {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  addToy() {
    console.log(`Adding toy ${this.name}`);
  }
}

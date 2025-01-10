import { AToy } from './atoy';
import { Cat } from './cat';

export abstract class BlackCat extends Cat {
  static age: number;
  protected toysForCat: AToy[];

  constructor(name: string, age: number, meowrate: number) {
    super(name, age, meowrate);
    this.toysForCat = [];
  }

  buyToy(toy: AToy) {
    this.toysForCat.push(toy);
  }

  addToy(name: string) {
    for (const itm of this.toysForCat) {
      if (itm.name === name) {
        itm.addToy();
        return;
      }
    }
    const toy = this.toysForCat.find(itm => itm.name === name);
    if (toy) {
      toy.addToy();
      return;
    }
    throw new Error(`No such toy ${name}`);
  }
}

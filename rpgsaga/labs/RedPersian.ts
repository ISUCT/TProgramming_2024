import { RedCat } from './redCat';

export class RedPersian extends RedCat {
  display() {
    console.log(`I'm red persian cat`);
  }
  drinkWoter(): void {
    console.log(`${this.name} likes woter`);
  }
  wash(): void {
    console.log(`${this.name} likes to bathe`);
  }
}

import { BlackCat } from './blackCat';

export class BlackPersian extends BlackCat {
  display() {
    console.log(`I'm black persian cat`);
  }
  drinkMilk(): void {
    console.log(`${this.name} like milk`);
  }
  scratch(): void {
    console.log(`${this.name} have pancake claws`);
  }
}

import { Person } from './Person';

export class Customer extends Person {
  toString() {
    return 'У Customer toString() переопределён';
  }
  come(): void {
    console.log(`${this.name} пришёл домой`);
  }
}

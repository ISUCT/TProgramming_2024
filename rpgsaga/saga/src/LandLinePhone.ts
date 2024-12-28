import { Phone } from './Phone';

export class LandLinePhone extends Phone {
  display() {
    console.log(`I'm landline phone`);
  }
  dial(number: string) {
    console.log(`dialing from landline phone with ${this.phoneNumber} to ${number}`);
  }
}

import { Phone } from './Phone';

export abstract class CellPhone extends Phone {
  dial(number: string): void {
    console.log(`dialing from cell phone with ${this.phoneNumber} to ${number}`);
  }

  declineCall(): void {
    console.log('declining call');
  }

  sendMessage(text: string): void {
    console.log(`sending message from ${this.phoneNumber}: ${text}`);
  }
  reciveMessage(msg: string): void {
    console.log(`received message from: ${msg}`);
  }
}

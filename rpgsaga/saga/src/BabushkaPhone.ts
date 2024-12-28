import { CellPhone } from './CellPhone';

export class BabushkaPhone extends CellPhone {
  display() {
    console.log(`I'm Babushka Phone`);
  }
  sendSos(): void {
    console.log(`Sending sos message from ${this.phoneNumber}`);
  }
}

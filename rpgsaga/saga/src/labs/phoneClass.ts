import { Device } from './deviceClass';

export class Phone extends Device {
  private _phoneNumber: number;

  constructor(phoneNumber: number, brand: string, model: string, id: number) {
    super(brand, model, id);
    this._phoneNumber = phoneNumber;
  }

  public get phoneNumber(): number {
    return this._phoneNumber;
  }
  public set phoneNumber(num: number) {
    if (10000000000 <= num && num <= 99999999999) {
      this._phoneNumber = num;
      return;
    } else {
      throw new Error('the length of the number should be 11');
    }
  }

  public makeCall(): string {
    return `Совершается вызов абонента по номеру ${this.phoneNumber}`;
  }
  public getInfo(): string {
    return `Данный абонент, с номером ${this.phoneNumber}, владеет телефоном  ${this.brand} ${this.model}, id которого ${this.id}`;
  }
}

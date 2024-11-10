import { Certificate } from './certificate';

export class Receipt extends Certificate {
  private _amount: number;
  private _numberOfPurchases: number;

  constructor(documentType: string, size: number, yearOfCreation: number, amount: number, numberOfPurchases: number) {
    super(documentType, size, yearOfCreation);
    this._amount = amount;
    this._numberOfPurchases = numberOfPurchases;
  }

  private set amount(amount: number) {
    if (amount > 0) {
      this._amount = amount;
      return;
    }
    throw new Error(`Receipt has invalid amount (negative or null)`);
  }

  private set numberOfPurchases(numberOfPurchases: number) {
    if (numberOfPurchases > 0) {
      this._numberOfPurchases = numberOfPurchases;
      return;
    }
    throw new Error(`Receipt has invalid amount (negative or null)`);
  }

  get amount(): number {
    return this._amount;
  }

  get numberOfPurchases(): number {
    return this._numberOfPurchases;
  }

  public giveReceipt() {
    console.log(
      `The recepeit with amount of ${this._amount}$ and ${this._numberOfPurchases} number of purchases was given to buyer`,
    );
  }
}

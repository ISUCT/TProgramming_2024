export class Phone {
  private _phoneNumber: number;
  private _phoneBrand: string;
  private _phoneModel: string;

  constructor(phoneNumber: number, phoneBrand, phoneModel: string) {
    this._phoneNumber = phoneNumber;
    this._phoneBrand = phoneBrand;
    this._phoneModel = phoneModel;
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
  public get phoneBrand(): string {
    return this._phoneBrand;
  }
  public set phoneBrand(brand: string) {
    this._phoneBrand = brand;
  }

  public get phoneModel(): string {
    return this._phoneModel;
  }
  public set phoneModel(model: string) {
    this._phoneModel = model;
  }
}

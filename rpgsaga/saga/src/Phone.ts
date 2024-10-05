export class Phone {
  private _modelName: string;
  private _phoneNumber: string;
  private _weight: number;

  constructor(modelName: string, phoneNumber: string, weight: number) {
    console.log('Constructor for Phone called');
    this._modelName = modelName;
    this._phoneNumber = phoneNumber;
    this.weight = weight;
  }

  get weight(): number {
    return this._weight;
  }

  set weight(weight: number) {
    if (weight > 0 && weight < 2000) {
      this._weight = weight;
      return;
    }
    throw new Error('weight out of range');
  }

  dial(number: string) {
    console.log(`Dialing ${number}`);
  }

  acceptCall() {
    console.log(`Accepting incomming Call to ${this._phoneNumber}`);
  }
}

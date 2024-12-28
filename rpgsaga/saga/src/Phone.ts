import { IDrawable } from './IDrawable';

export abstract class Phone implements IDrawable {
  private _modelName: string;
  protected phoneNumber: string;
  private _weight: number;

  constructor(modelName: string, phoneNumber: string, weight: number) {
    console.log('Constructor for Phone called');
    this._modelName = modelName;
    this.phoneNumber = phoneNumber;
    this.weight = weight;
  }
  abstract display();

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

  abstract dial(number: string);

  acceptCall() {
    console.log(`Accepting incomming Call to ${this.phoneNumber}`);
  }
}

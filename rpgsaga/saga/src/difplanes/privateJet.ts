import { Airplane } from '../abstract/airplane';

export class PrivateJet extends Airplane {
  private _owner: string;
  private _value: number;

  constructor(newSpeed: number, newModel: string, newManufCountry: string, newOwner: string, newValue: number) {
    super(newSpeed, newModel, newManufCountry);
    this.owner = newOwner;
    this.value = newValue;
  }

  public get value(): number {
    return this._value;
  }

  public set value(nValue: number) {
    if (nValue >= 2000000 && nValue < 500000000) {
      this._value = nValue;
    } else {
      throw new Error("PrivateJets can't be this value");
    }
  }

  public get owner(): string {
    return this._owner;
  }

  public set owner(nOwner: string) {
    if (nOwner === '') {
      throw new Error("There can't be no owner");
    } else {
      this._owner = nOwner;
    }
  }

  description(): string {
    return `Model: ${this._model} \n Speed: ${this._speed} \n ManufacturingCountry: ${this._manufCountry} \n Owner: ${this._owner} \n Value: ${this._value}`;
  }

  public feature(): string {
    return `${this.model}, owned by ${this.owner} is a great time saver`;
  }
}

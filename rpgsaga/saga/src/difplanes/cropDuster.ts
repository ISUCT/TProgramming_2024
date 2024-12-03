import { Airplane } from '../abstract/airplane';

export class CropDuster extends Airplane {
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
    if (nValue >= 15000 && nValue < 5000000) {
      this._value = nValue;
    } else {
      throw new Error("CropDusters can't be this value");
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
    return `${this.model} of this handsome ${this.owner} is best for agriculture`;
  }
}

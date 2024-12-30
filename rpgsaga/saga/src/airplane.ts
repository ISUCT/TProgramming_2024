import { Transport } from './Transport';

export class Airplane extends Transport {
  private _wingSpan: number;
  private _modelAirplane: string;
  private _passengerCapacity: number;
  constructor(
    wingSpan: number,
    passengerCapacity: number,
    modelAirplane: string,
    weightInKillos: number,
    fuelType: string,
    maxSpeed: number,
  ) {
    super(weightInKillos, fuelType, maxSpeed);
    this._wingSpan = wingSpan;
    this._modelAirplane = modelAirplane;
    this._passengerCapacity = passengerCapacity;
  }

  public set wingSpan(value: number) {
    if (value > 0) {
      this._wingSpan = value;
    } else {
      throw new Error('Invalid wing span value');
    }
  }

  public set passengerCapacity(value: number) {
    if (value >= 0) {
      this._passengerCapacity = value;
    } else {
      throw new Error('Invalid passenger capacity');
    }
  }

  public get wingSpan(): number {
    return this._wingSpan;
  }
  public get modelAirplane(): string {
    return this._modelAirplane;
  }

  public get passengerCapacity(): number {
    return this._passengerCapacity;
  }

  public displayInfo(): string {
    return `Wing Span: ${this._wingSpan}m, Passenger Capacity: ${this._passengerCapacity},Model: ${this._modelAirplane}m, Fuel type: ${this.fuelType}, Max speed: ${this.maxSpeed}, Weight in killos: ${this.weightInKillos}`;
  }

  public performance(): string {
    if (this._passengerCapacity < 50) {
      return 'Small Aircraft';
    }
    if (this._passengerCapacity >= 50 && this._passengerCapacity < 150) {
      return 'Medium Aircraft';
    }
    if (this._passengerCapacity >= 150) {
      return 'Large Aircraft';
    }
  }
}

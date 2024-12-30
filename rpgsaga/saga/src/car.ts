import { Transport } from './Transport';

export class Car extends Transport {
  private _modelCar: string;
  private _numberOfDoors: number;
  private _transmissionType: string;

  constructor(
    modelCar: string,
    numberOfDoors: number,
    transmissionType: string,
    weightInKillos: number,
    fuelType: string,
    maxSpeed: number,
  ) {
    super(weightInKillos, fuelType, maxSpeed);
    this._modelCar = modelCar;
    this._numberOfDoors = numberOfDoors;
    this._transmissionType = transmissionType;
  }

  public set numberOfDoors(value: number) {
    if (value > 0) {
      this._numberOfDoors = value;
    } else {
      throw new Error('Invalid number of doors');
    }
  }

  public set transmissionType(value: string) {
    this._transmissionType = value;
  }

  public get numberOfDoors(): number {
    return this._numberOfDoors;
  }

  public get transmissionType(): string {
    return this._transmissionType;
  }

  public displayInfo(): string {
    return `Model: ${this._modelCar}, , Number of Doors: ${this._numberOfDoors}, Fuel Type: ${this.fuelType},Max Speed: ${this.maxSpeed} km/h, Weight: ${this.weightInKillos} kg`;
  }

  public performance(): string {
    if (this.maxSpeed < 100) {
      return 'Economy Car';
    }
    if (this.maxSpeed >= 100 && this.maxSpeed < 200) {
      return 'Standard Car';
    }
    if (this.maxSpeed >= 200) {
      return 'Sport Car';
    }
  }
}

import { ElecDevices } from './electronicDevices';

export class Computer extends ElecDevices {
  private _processorModel: string;
  private _hardDriveCapacity: number;
  private _randomAccesMemoryValue: number;
  constructor(
    processorModel: string,
    hardDriveCapacity: number,
    randomAccesMemoryValue: number,
    model: string,
    caseColor: string,
    weightInGrams: number,
  ) {
    super(model, caseColor, weightInGrams);
    this._processorModel = processorModel;
    this._hardDriveCapacity = hardDriveCapacity;
    this._randomAccesMemoryValue = randomAccesMemoryValue;
  }

  public set randomAccesMemoryValue(value: number) {
    if (value >= 2) {
      this._randomAccesMemoryValue = value;
    } else {
      throw new Error('Invalid value of RAM');
    }
  }

  public set hardDriveCapacity(value: number) {
    if (value >= 128) {
      this._hardDriveCapacity = value;
    } else {
      throw new Error('Invalid capacity');
    }
  }

  public set processorModel(name: string) {
    this._processorModel = name;
  }

  public get randomAccesMemoryValue(): number {
    return this._randomAccesMemoryValue;
  }

  public get hardDriveCapacity(): number {
    return this._hardDriveCapacity;
  }

  public get processorModel(): string {
    return this._processorModel;
  }

  public displayInfo(): string {
    return `Processor model: ${this._processorModel}, Hard Drive Capacity: ${this._hardDriveCapacity}, RAM value: ${this._randomAccesMemoryValue}, Model Name: ${this.model}, Case color: ${this.caseColor}, Weight in grams: ${this.weightInGrams}`;
  }

  public perfomance(): string {
    if (this._randomAccesMemoryValue < 8) {
      return 'Low Perfomance';
    }
    if (this._randomAccesMemoryValue >= 8 && this._randomAccesMemoryValue < 16) {
      return 'Mid Perfomance';
    }
    if (this._randomAccesMemoryValue >= 16) {
      return 'High Perfomance';
    }
  }
}

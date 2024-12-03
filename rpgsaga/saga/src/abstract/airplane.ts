export abstract class Airplane {
  protected _speed: number;
  protected _model: string;
  protected _manufCountry: string;

  constructor(newSpeed: number, newModel: string, newManufCountry: string) {
    this.speed = newSpeed;
    this.model = newModel;
    this.manufCountry = newManufCountry;
  }
  public set speed(newSpeed: number) {
    if (newSpeed > 0 && newSpeed < 10000) {
      this._speed = newSpeed;
    } else {
      throw new Error(`Invalid speed: ${newSpeed}. Speed must be between 1 and 9999.`);
    }
  }
  public set model(newModel: string) {
    if (newModel.trim().length === 0) {
      throw new Error('Model name cannot be empty.');
    }
    this._model = newModel;
  }
  public set manufCountry(newManufCountry: string) {
    if (newManufCountry.trim().length === 0) {
      throw new Error('Manufacturing country cannot be empty.');
    }
    this._manufCountry = newManufCountry;
  }
  public get speed(): number {
    return this._speed;
  }
  public get model(): string {
    return this._model;
  }
  public get manufCountry(): string {
    return this._manufCountry;
  }
  toString(): string {
    return `${this._model} ${this._manufCountry}`;
  }
  toNumber(): number {
    return this._speed;
  }
  description(): string {
    return `Model: ${this._model} \n Speed: ${this._speed} \n ManufacturingCountry: ${this._manufCountry}`;
  }
  abstract feature(): string;
}

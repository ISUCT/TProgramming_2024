export abstract class Transport {
  private _maxSpeed: number;
  private _weightInKillos: number;
  private _fuelType: string;
  constructor(weightInKillos: number, fuelType: string, maxSpeed: number) {
    this.fuelType = fuelType;
    this.maxSpeed = maxSpeed;
    this.weightInKillos = weightInKillos;
  }
  public set fuelType(name: string) {
    this._fuelType = name;
  }
  public set maxSpeed(value: number) {
    this._maxSpeed = value;
  }
  public set weightInKillos(value: number) {
    this.weightInKillos = value;
  }
  public get fuelType(): string {
    return this._fuelType;
  }
  public get maxSpeed(): number {
    return this._maxSpeed;
  }
  public get weightInKillos(): number {
    return this._weightInKillos;
  }

  abstract displayInfo(): void;
}

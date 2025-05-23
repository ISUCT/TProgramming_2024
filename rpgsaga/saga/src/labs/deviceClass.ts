export abstract class Device {
  private _brand: string;
  private _model: string;
  private _id: number;

  constructor(brand: string, model: string, id: number) {
    this._brand = brand;
    this._model = model;
    this._id = id;
  }
  public get brand(): string {
    return this._brand;
  }
  public set brand(brand: string) {
    this._brand = brand;
  }

  public get id(): number {
    return this._id;
  }
  public set id(id: number) {
    this._id = id;
  }

  public get model(): string {
    return this._model;
  }
  public set model(model: string) {
    this._model = model;
  }

  abstract getInfo(): void;
}

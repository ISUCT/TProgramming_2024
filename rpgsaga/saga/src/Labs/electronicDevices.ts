export abstract class ElecDevices {
  private _model: string;
  private _caseColor: string;
  private _weigthInGrams: number;
  constructor(model: string, caseColor: string, weightInGrams: number) {
    this._model = model;
    this._caseColor = caseColor;
    this._weigthInGrams = weightInGrams;
  }

  public set model(name: string) {
    this._model = name;
  }
  public set caseColor(name: string) {
    this._caseColor = name;
  }
  public set weightInGrams(value: number) {
    this._weigthInGrams = value;
  }
  public get model(): string {
    return this._model;
  }
  public get caseColor(): string {
    return this._caseColor;
  }
  public get weightInGrams(): number {
    return this._weigthInGrams;
  }

  abstract displayInfo(): void;
}

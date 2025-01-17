import { ElecDevices } from './electronicDevices';

export class Phone extends ElecDevices {
  private _screenDiagonalInInches: number;
  private _screenFrequency: number;
  constructor(
    model: string,
    caseColor: string,
    weightInGrams: number,
    screenDiagonalInInches: number,
    screenFrequency: number,
  ) {
    super(model, caseColor, weightInGrams);
    this._screenDiagonalInInches = screenDiagonalInInches;
    this._screenFrequency = screenFrequency;
  }
  public get screenDiagonalInInches(): number {
    return this._screenDiagonalInInches;
  }
  public get screenFrequency(): number {
    return this._screenFrequency;
  }
  public displayInfo(): string {
    return `Diagonal: ${this._screenDiagonalInInches}, Frequency: ${this._screenFrequency}`;
  }
}

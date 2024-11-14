import { Device } from './deviceClass';

export class Monitor extends Device {
  private _diagonal: number;
  private _colourDepth: number;
  private _typeOfMatrix: string;
  constructor(typeOfMatrix: string, brand: string, model: string, colourDepth: number, diagonal: number, id: number) {
    super(brand, model, id);
    this._typeOfMatrix = typeOfMatrix;
    this._colourDepth = colourDepth;
    this._diagonal = diagonal;
  }

  public get typeOfMatrix(): string {
    return this._typeOfMatrix;
  }
  public set typeOfMatrix(typeOfMatrix: string) {
    this._typeOfMatrix = typeOfMatrix;
  }

  public get colourDepth(): number {
    return this._colourDepth;
  }
  public set colourDepth(colourDepth: number) {
    this._colourDepth = colourDepth;
  }

  public get diagonal(): number {
    return this._diagonal;
  }
  public set diagonal(diagonal: number) {
    if (diagonal <= 0) {
      throw new Error('diagonal must be greater than 0');
    } else {
      this._diagonal = diagonal;
    }
  }

  public getInfo(): string {
    return `Монитор ${this.brand} ${this.model} с серийным номер ${this.id}, имеет размер ${this.diagonal}, тип матрицы ${this.typeOfMatrix} и глубину цвета ${this.colourDepth}`;
  }
}

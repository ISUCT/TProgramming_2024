import { Product } from './Product';

export default class Drink extends Product {
  private _volume: number;

  constructor(price: number, name: string, volume: number) {
    super(price, name);
    if (volume <= 0) {
      throw new Error('Объем должен быть больше 0 мл');
    }
    this._volume = volume;
  }

  public set volume(volume: number) {
    if (volume > 0) {
      this._volume = volume;
    } else {
      throw new Error('Объем должен быть больше 0 мл');
    }
  }

  public get volume(): number {
    return this._volume;
  }

  public details(): string {
    return `Volume: ${this.volume} мл`;
  }

  public toString(): string {
    return `${super.toString()}, ${this.details()}`;
  }
}

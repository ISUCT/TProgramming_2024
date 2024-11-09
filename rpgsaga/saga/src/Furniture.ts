export abstract class Furniture {
  protected _length: number;
  protected _width: number;
  protected _height: number;
  protected _material: string;
  protected _weight: number;

  constructor() {}

  abstract get length(): number;
  abstract get width(): number;
  abstract get height(): number;
  abstract get material(): string;
  abstract get weight(): number;
  abstract set length(length: number);
  abstract set width(width: number);
  abstract set height(height: number);
  abstract set material(material: string);
  abstract set weight(weight: number);

  abstract purpose(): string;

  toString(): string {
    return `Length: ${this.length}, Width: ${this.width}, Height: ${this.height}, Material: ${this.material}, Weight: ${this.weight}`;
  }

  approximateСost(): string {
    return 'The calculated cost of the product';
  }
}

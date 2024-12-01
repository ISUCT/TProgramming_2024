export abstract class Product {
  private _price: number;
  private _name: string;

  constructor(price: number, name: string) {
    if (price <= 0) {
      throw new Error('Цена должна быть больше 0 рублей');
    }
    if (!name.trim()) {
      throw new Error('Название не может быть пустым');
    }
    this._price = price;
    this._name = name;
  }

  public set price(price: number) {
    if (price > 0) {
      this._price = price;
    } else {
      throw new Error('Цена должна быть больше 0 рублей');
    }
  }

  public set name(name: string) {
    if (name.trim()) {
      this._name = name;
    } else {
      throw new Error('Название не может быть пустым');
    }
  }

  public get price(): number {
    return this._price;
  }

  public get name(): string {
    return this._name;
  }

  abstract details(): string;

  public toString(): string {
    return `Product: ${this.name}, Price: ${this.price} рублей`;
  }
}

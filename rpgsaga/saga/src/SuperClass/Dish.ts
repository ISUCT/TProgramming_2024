import { Product } from './Product';

export default class Dish extends Product {
  private _calorie: number;

  constructor(price: number, name: string, calorie: number) {
    super(price, name);
    if (calorie < 0) {
      throw new Error('Калорийность не может быть отрицательной');
    }
    this._calorie = calorie;
  }

  public set calorie(calorie: number) {
    if (calorie >= 0) {
      this.calorie = calorie;
    } else {
      throw new Error('Калорийность не может быть отрицательной');
    }
  }

  public get calorie(): number {
    return this._calorie;
  }

  public details(): string {
    return `Calories: ${this.calorie} ккал`;
  }

  public toString(): string {
    return `${super.toString()}, ${this.details()}`;
  }
}

import { Animal } from "./animal";

export class Dog extends Animal {
  private _breed: string = 'Unknown';
  get breed(): string {
    return this._breed;
  }

  private _weight: number | null = null;
  get weight(): number {
    if(this._weight === null) {
      throw new Error("Dog weight is not set");
    }

    return this._weight;
  }
  set weight(value: number) {
    this._weight = value;
  }

  public constructor(age: number, weight: number, name?: string, breed?: string) {
    super(age, 15, name);

    this._weight = weight;

    if (breed) {
      this._breed = breed;
    }
  }

  public override interact(): string {
    return `Dog ${this.name} says bark!`;
  }

  public override toString() {
    return `Dog ${this.name} of breed ${this.breed} and age ${this.age} weighs ${this.weight}kg`;
  }
}

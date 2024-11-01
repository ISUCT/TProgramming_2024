import { Animal } from "./animal";

export class Cat extends Animal {
  

  private _breed: string = 'Unknown';
  get breed(): string {
    return this._breed;
  }

  public constructor(age: number, name?: string, breed?: string) {
    super(age, 20, name);

    if (breed) {
      this._breed = breed;
    }
  }

  public override interact(): string {
    return `Cat ${this.name} says meow!`;
  }

  public override toString() {
    return `Cat ${this.name} of breed ${this.breed} and age ${this.age}`;
  }
}

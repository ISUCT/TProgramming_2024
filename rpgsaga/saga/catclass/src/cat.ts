export class Cat {
  private _age: number = -1;
  public get age(): number {
    return this._age;
  }
  private set age(value: number) {
    if (value >= 0 && value <= 25) {
      this._age = value;
      return;
    }

    throw new Error('Age is invalid');
  }

  private _name: string = 'No name';
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }

  private _breed: string = 'Unknown';
  get breed(): string {
    return this._breed;
  }

  public constructor(age: number, name?: string, breed?: string) {
    this.age = age;

    if (name !== undefined) {
      this._name = name;
    }

    if (breed !== undefined) {
      this._breed = breed;
    }
  }

  public petTheCat(): string {
    return `Cat ${this.name} says meow!`;
  }
}

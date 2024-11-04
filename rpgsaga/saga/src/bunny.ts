export class Bunny {
  private _name: string;
  private _age: number;
  private _weight: number;

  constructor(bunnyName: string, age: number, weight: number) {
    this.name = bunnyName;
    this.age = age;
    this.weight = weight;
  }

  public set name(name: string) {
    this._name = name;
  }

  public set age(age: number) {
    if (age >= 0 && age <= 25) {
      this._age = age;
    } else {
      throw new Error('Wrong age');
    }
  }

  public set weight(weight: number) {
    if (weight >= 2 && weight <= 10) {
      this._weight = weight;
    } else {
      throw new Error('Wrong weight');
    }
  }

  public get name() {
    return this._name;
  }

  public get age() {
    return this._age;
  }

  public get weight() {
    return this._weight;
  }
}

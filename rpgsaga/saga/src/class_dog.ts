export class Dog {
  private _name: string;
  private _age: number;
  private _weight: number;

  constructor(dogName: string, dogAge: number, dogWeight: number) {
    this._name = dogName;
    this._age = dogAge;
    this._weight = dogWeight;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get name(): string {
    return this._name;
  }

  public set age(age: number) {
    if (age >= 0 && age <= 20) {
      this._age = age;
    } else {
      throw new Error('Wrong age');
    }
  }

  public get age(): number {
    return this._age;
  }

  public set weight(weight: number) {
    if (weight > 0 && weight <= 45) {
      this._weight = weight;
    } else {
      throw new Error('Wrong weight');
    }
  }

  public get weight(): number {
    return this._weight;
  }
}

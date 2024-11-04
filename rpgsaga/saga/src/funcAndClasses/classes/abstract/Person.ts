export abstract class Person {
  protected _name: string;
  protected _sex: string;
  protected _age: number;

  constructor(personName, personAge, personSex) {
    this.name = personName;
    this.age = personAge;
    this.sex = personSex;
  }

  public get age(): number {
    return this._age;
  }

  public set age(newAge: number) {
    if (newAge < 0 || newAge > 110) {
      throw new Error('Недопустимый возраст');
    } else {
      this._age = newAge;
    }
  }

  public get name(): string {
    return this._name;
  }

  public set name(newName: string) {
    this._name = newName;
  }

  public get sex(): string {
    return this._sex;
  }

  public set sex(newSex: string) {
    const personSex = newSex.toLowerCase();
    if (personSex === 'male' || personSex === 'female') {
      this._sex = personSex;
    } else {
      throw new Error('Недопустимый гендер');
    }
  }

  toString(): string {
    return `${this._name} ${this._sex}`;
  }

  toNumber(): number {
    return this._age;
  }

  print(): string {
    return `name: ${this._name}\nsex: ${this._sex}\nage: ${this._age}`;
  }

  abstract workRespons(): string;
}

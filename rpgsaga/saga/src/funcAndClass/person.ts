export class Person {
  private _name: string;
  private _sex: string;
  private _age: number;

  constructor(personFirstName, personAge, personSex) {
    this.name = personFirstName;
    this.age = personAge;
    this.sex = personSex;
  }

  toString(): string {
    return `${this._name} ${this._sex}`;
  }

  toNumber(): number {
    return this._age;
  }

  print(): string {
    return `first name: ${this._name}\nsex: ${this._sex}\nage: ${this._age}`;
  }

  public get age(): number {
    return this._age;
  }

  public set age(n: number) {
    if (n < 0 || n > 110) {
      throw new Error('Недопустимый возраст');
    } else {
      this._age = n;
    }
  }

  public get name(): string {
    return this._name;
  }

  public set name(n: string) {
    this._name = n;
  }

  public get sex(): string {
    return this._sex;
  }

  public set sex(n: string) {
    const personSex = n.toLowerCase();
    if (personSex === 'male' || personSex === 'female') {
      this._sex = personSex;
    } else {
      throw new Error('Недопустимый гендер');
    }
  }
}

export class Employee {
  private _name: string;
  private _age: number;
  private _salary: number;

  constructor(name: string, age: number, salary: number = 15000) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }

  public get name(): string {
    return this._name;
  }
  public set name(name: string) {
    this._name = name;
  }
  public get age(): number {
    return this._age;
  }
  public set age(age: number) {
    if (age < 0) {
      throw new Error('Age cannot be negative.');
    }
    this._age = age;
  }
  public get salary(): number {
    return this._salary;
  }
  public set salary(salary: number) {
    if (salary < 0) {
      throw new Error('Salary cannot be negative.');
    }
    this._salary = salary;
  }
}

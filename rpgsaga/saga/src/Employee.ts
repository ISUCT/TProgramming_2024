import { Person } from './Person';

export class Employee extends Person {
  private _salary: number;
  private _yearsOfWorkExperience: number = 0;

  constructor(name: string, age: number, salary: number = 15000, isSick: boolean = false) {
    super(name, age, isSick);
    this.salary = salary;
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

  come() {
    console.log(`${this.name} пришёл на работу`);
  }
  toString(): void {
    console.log('У Employee toString() переопределён');
  }

  addYearsOfWorkExperience(years: number): void {
    if (years < 0) {
      throw new Error('You cannot add negative numbers');
    }
    this._yearsOfWorkExperience += years;
  }
  getYearsOfWorkExperience(): number {
    return this._yearsOfWorkExperience;
  }
}

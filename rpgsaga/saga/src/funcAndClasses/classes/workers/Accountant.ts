import { Person } from '../abstract/Person';

export class Accountant extends Person {
  private _work: string;
  private _salary: number;

  constructor(personName, personAge, personSex, personWork, personSalary) {
    super(personName, personAge, personSex);
    this.work = personWork;
    this.salary = personSalary;
  }

  public get work(): string {
    return this._work;
  }

  public set work(workName: string) {
    this._work = workName;
  }

  public get salary(): number {
    return this._salary;
  }

  public set salary(salaryValue: number) {
    if (salaryValue < 0) {
      throw new Error('Недопустимая зарплата');
    } else {
      this._salary = salaryValue;
    }
  }

  public workRespons(): string {
    return `${this.name} does paperwork`;
  }

  toString(): string {
    return `${this._name} ${this._sex} ${this._work}`;
  }
}

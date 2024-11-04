import { Person } from '../abstract/Person';

export class Doctor extends Person {
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
    return `${this.name} heals people`;
  }

  toString(): string {
    return `${this._name} ${this._sex} ${this._work}`;
  }
}

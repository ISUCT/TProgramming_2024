export class Employee {
  private nameC: string;
  private ageC: number;
  private salaryC: number;

  constructor(name: string, age: number, salary: number = 15000) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }

  public get name(): string {
    return this.nameC;
  }
  public set name(name: string) {
    this.nameC = name;
  }
  public get age(): number {
    return this.ageC;
  }
  public set age(age: number) {
    if (age >= 0) {
      this.ageC = age;
      return;
    }
    throw new Error('Возраст не может быть отрицательным.');
  }
  public get salary(): number {
    return this.salaryC;
  }
  public set salary(salary: number) {
    if (salary >= 0) {
      this.salaryC = salary;
      return;
    }
    throw new Error('Заплата не может быть отрицательной.');
  }
}

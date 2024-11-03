export class Employee {
    private _name: string;
    private _age: number;
    private _date: string;

    constructor(name: string, age: number, date: string) {
        this._name = name;
        this._date = date;
        this.age = age;
    }

    public get name(): string {
        return this._name;
    }

    public get age(): number {
        return this._age;
    }

    public get date(): string {
        return this._date;
    }

    public set age(age: number) {
        if (age > 17 && age < 80) {
            this._age = age;
        } else {
            throw new Error('age is incorrect');
        }
    }

    NewEmployee(name: string, age: number, date: string) {
        if (age > 17 && age < 80) {
            console.log(`Name: ${name}\nAge: ${age}\nDate: ${date}`);
        } else {
            throw new Error('age is incorrect');
        }
      }
}

const emp = new Employee("Виктор Иванов", 30, "10.01.2024");
emp.NewEmployee("Александра Павлова", 20, "02.08.2024");

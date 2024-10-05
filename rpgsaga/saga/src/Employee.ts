export default class Employee {
    private _name: string;
    private _age: number;
    private _salary: number;
    
    constructor(_name: string, _age: number, _salary: number = 15000) {
        this.name = _name;
        this.age = _age;
        this.salary = _salary;
    }

    public get name(): string {
        return this._name;
    }
    public set name(_name: string) {
        this._name = _name;
    }
    public get age(): number {
        return this._age;
    }
    public set age(_age: number) {
        if (_age >= 0) {
            this._age = _age;
            return;
        }
        throw new Error('Возраст не может быть отрицательным.')
    }
    public get salary(): number {
        return this._salary;
    }
    public set salary(_salary: number) {
        if (_salary >= 0) {
            this._salary = _salary;
            return;
        }
        throw new Error('Заплата не может быть отрицательной.')
    }
}
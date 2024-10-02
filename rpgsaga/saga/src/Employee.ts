class Employee {
    private name: string;
    private age: number;
    private salary: number;
    constructor(_name: string, _age: number, _salary: number = 15000) {
        this.name = _name;
        this.SetAge(_age);
        this.salary = _salary;
    }
    SetName(_name: string): void {
        this.name = _name;
    }
    GetName(): string {
        return this.name;
    }
    SetAge(_age: number): void {
        _age >= 0 ? this.age = _age : console.log("Возраст должен быть >= 0");
    }
    GetAge(): number {
        return this.age;
    }
    SetSalary(_salary: number): void {
        this.salary = _salary;
    }
    GetSalary(): number {
        return this.salary;
    }
}

export default Employee;
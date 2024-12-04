export class Mouse {
    private name: string;
    private age: number;
    private color: string;

    constructor(name: string, age: number, color: string) {
        this.name = name;
        this.age = age;
        this.color = color;
    }

    public getAge(): number {
        return this.age;
    }

    public setAge(age: number): void {
        if (age > 0) {
            this.age = age;
        } else {
            throw new Error("Возраст должен быть положительным числом.");
        }
    }

    public getName(): string {
        return this.name;
    }

    public getColor(): string {
        return this.color;
    }

    public displayInfo(): void {
        console.log(`\nИмя: ${this.getName()}`);
        console.log(`Возраст: ${this.getAge()} лет`);
        console.log(`Цвет: ${this.getColor()}`);
    }
}

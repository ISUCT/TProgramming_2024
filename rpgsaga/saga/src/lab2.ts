export class Cat {
    private _name: string;
    private _age: number;
    private _breed: string;

    constructor(name: string, age: number, breed: string) {
        this._name = name;
        this.validateAge(age);
        this._age = age;
        this._breed = breed;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this.validateNonEmpty(name);
        this._name = name;
    }

    get age(): number {
        return this._age;
    }

    set age(age: number) {
        this.validateAge(age);
        this._age = age;
    }

    get breed(): string {
        return this._breed;
    }

    set breed(breed: string) {
        this.validateNonEmpty(breed);
        this._breed = breed;
    }

    private validateAge(age: number): void {
        if (age < 0 || age > 30) {
            throw new Error('Возраст должен быть от 0 до 30 лет.');
        }
    }

    private validateNonEmpty(value: string): void {
        if (value.length === 0) {
            throw new Error('Значение не может быть пустым.');
        }
    }

    public meow(): string {
        return `${this._name} говорит: "Мяу!"`;
    }

    public celebrateBirthday(): void {
        this.age += 1;
    }

    public getInfo(): string {
        return `Имя: ${this._name}, Возраст: ${this._age}, Порода: ${this._breed}`;
    }
}

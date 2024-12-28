abstract class Animal {
    protected _name: string;
    protected _age: number;

    constructor(name: string, age: number) {
        this.validateAge(age);
        this._name = name;
        this._age = age;
    }

    protected validateAge(age: number): void {
        if (age < 0 || age > 30) {
            throw new Error('Возраст должен быть от 0 до 30 лет.');
        }
    }

    public abstract makeSound(): string;
    public abstract getAnimalInfo(): string;

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        if (!name || name.trim().length === 0) {
            throw new Error('Имя не может быть пустым.');
        }
        this._name = name;
    }

    get age(): number {
        return this._age;
    }

    set age(age: number) {
        this.validateAge(age);
        this._age = age;
    }
}

export class Cat extends Animal {
    private _breed: string;

    constructor(name: string, age: number, breed: string) {
        super(name, age);
        this._breed = breed;
    }

    get breed(): string {
        return this._breed;
    }

    set breed(breed: string) {
        if (!breed || breed.trim().length === 0) {
            throw new Error('Порода не может быть пустой.');
        }
        this._breed = breed;
    }

    public makeSound(): string {
        return `${this._name} говорит: "Мяу!"`;
    }

    public getAnimalInfo(): string {
        return `Кошка "${this._name}", возраст: ${this._age}, порода: ${this._breed}`;
    }

    public toString(): string {
        return `Кошка: ${this._name} (${this._breed}), возраст: ${this._age}`;
    }
}

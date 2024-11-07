export abstract class Animal {
    protected name: string;
    protected age: number;
    protected breed: string;

    constructor(animalName: string, animalAge: number, animalBreed: string) {
        this.name = animalName;
        this.age = animalAge;
        this.breed = animalBreed;
    }

    get getName(): string {
        return this.name;
    }

    get getAge(): number {
        return this.age;
    }

    get getBreed(): string {
        return this.breed;
    }

    set setAge(age: number) {
        if (age < 0 || age > 25) {
            throw new Error('The value specified is incorrect for the age!');
        }
        this.age = age;
    }

    public changeName(newName: string): void {
        this.name = newName;
    }

    public eat(): string {
        return `${this.getName} is eating`;
    }

    abstract getFullInfo(): string;

    abstract makeSound(): string;
}
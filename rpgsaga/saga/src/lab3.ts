abstract class Animal {
    protected name: string;
    protected age: number;
    protected breed: string;

    constructor(animalName: string, animalAge: number, animalBreed:string) {
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
            throw new Error('The value specified is incorrect for the age!')
        }
        this.age = age;
    }

    public changeName(newAnName: string) {
        this.name = newAnName;
    }

    public eat(): string {
        return `${this.getName} is eating`;
    }

    abstract getFullInfo(): string;

    abstract makeSound(): string;
}

export class Cat extends Animal {

    constructor(catName: string, catAge: number, catBreed: string) {
        super(catName, catAge, catBreed);
    }

    public changeName(newName: string): void {
        this.changeName(newName);
    }

    public eat(): string {
        return `${this.getName} likes to eat fish and mouses`;
    }

    public getFullInfo(): string {
        return `'Cat name: ${this.getName}', his age is ${this.getAge} and his breed ${this.getBreed}`;
    }

    public makeSound(): string {
        return "Meow, meow";
    }
}

export class Dog extends Animal {

    constructor(dogName: string, dogAge: number, dogBreed: string) {
        super(dogName, dogAge, dogBreed);
    }

    public changeName(newName: string): void {
        this.changeName(newName);
    }

    public eat(): string {
        return `${this.getName} likes to eat bones and meat`;
    }

    public getFullInfo(): string {
        return `'Dog name: ${this.getName}', his age is ${this.getAge} and his breed ${this.getBreed}`;
    }

    public makeSound(): string {
        return 'Woof, woof';
    }

}


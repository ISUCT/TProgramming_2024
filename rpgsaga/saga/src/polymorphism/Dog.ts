import { Animal } from './Animals';

export class Dog extends Animal {
    private coloring: string;

    constructor(dogName: string, dogAge: number, dogBreed: string, dogColor: string) {
        super(dogName, dogAge, dogBreed);
        this.coloring = dogColor;
    }

    set setColor(newColor: string) {
        if (newColor !== '') {
            this.coloring = newColor;
            return;
        }
        throw new Error('You have not filled in the coloring field!');
    }

    get getColor(): string {
        return this.coloring;
    }

    public changeName(newName: string): void {
        super.changeName(newName);
    }

    public eat(): string {
        return `${this.getName} likes to eat bones and meat`;
    }

    public getFullInfo(): string {
        return `Dog name: ${this.getName}, his age is ${this.getAge} and his breed is ${this.getBreed}`;
    }

    public makeSound(): string {
        return 'Woof, woof';
    }
}
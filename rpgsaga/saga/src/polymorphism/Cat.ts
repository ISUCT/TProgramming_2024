import { Animal } from './Animals';

export class Cat extends Animal {
    private motherland: string;

    constructor(catName: string, catAge: number, catBreed: string, catMotherland: string) {
        super(catName, catAge, catBreed);
        this.motherland = catMotherland;
    }   

    set setMotherland(newMotherland: string) {
        if (newMotherland !== '') {
            this.motherland = newMotherland;
            return;
        }
        throw new Error('You have not filled in the motherland field!');
    }

    get getMotherland(): string {
        return this.motherland;
    }

    public changeName(newName: string): void {
        super.changeName(newName);
    }

    public eat(): string {
        return `${this.getName} likes to eat fish and mice`;
    }

    public getFullInfo(): string {
        return `Cat name: ${this.getName}, his age is ${this.getAge} and his breed is ${this.getBreed}`;
    }

    public makeSound(): string {
        return 'Meow, meow';
    }
}
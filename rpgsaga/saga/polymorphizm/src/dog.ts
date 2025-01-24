import { Animal } from './animal';

export class Dog extends Animal {
    constructor(name: string, age: number, weight?: number) {
        super(name, age, weight ?? 0);
    }


    sound(): string {
        return "Woof";
    }

    toString(): string {
        return `Dog: ${this.name}, Age: ${this.age}, Weight: ${this.weight}`;
    }
}
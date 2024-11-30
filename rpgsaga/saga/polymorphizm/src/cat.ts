import { Animal } from "./animal";

export class Cat extends Animal {
    constructor(name: string, age: number, weight?: number) {
        super(name, age, weight ?? 0);
    }

    sound(): string {
        return "Meow";
    }


    toString(): string {
        return `Cat: ${this.name}, Age: ${this.age}, Weight: ${this.weight}`;
    }
}
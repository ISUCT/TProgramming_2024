import { Animal } from "../Abstract/Animal";

export class Giraffe extends Animal {
    
    constructor(name: string, age: number, foodPreference: string) {
        super(name, age, foodPreference)   
    }

    printFoodPreference(): string {
        return `Giraffe eat ${this.foodPreference}`
    }
}
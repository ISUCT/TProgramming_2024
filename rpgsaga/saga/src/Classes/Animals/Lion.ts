import { Animal } from "../Abstract/Animal";

export class Lion extends Animal {
    
    constructor(name: string, age: number, foodPreference: string) {
        super(name, age, foodPreference)
    }

    printFoodPreference(): string {
        return `Lion eat ${this.foodPreference}`
    }
}
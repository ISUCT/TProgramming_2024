
export abstract class Animal {
    protected name: string;
    protected age: number;
    protected weight!: number; 

    constructor(name: string, age: number, weight?: number) {
        this.name = name;
        this.age = age;
        this.setWeight(weight ?? 0); 
    }

    setAge(age: number): void {
        this.age = age;
    }


    setWeight(weight: number): void {
        if (weight < 0) {
            throw new Error("Weight cannot be negative");
        }
        this.weight = weight;
    }


    abstract sound(): string;


    toString(): string {
        return `Animal: ${this.name}, Age: ${this.age}, Weight: ${this.weight}`;
    }
}
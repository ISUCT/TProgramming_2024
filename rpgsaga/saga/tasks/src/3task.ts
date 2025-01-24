export class Fox {
    private name: string;
    private age: number;
    private color: string;

    
    constructor(name: string, age: number, color: string);
    constructor(name: string);
    constructor(name: string, age?: number, color?: string) {
        this.name = name;
        this.age = age || 0; 
        this.color = color || "gray"; 
    }

    
    public getName(): string {
        return this.name;
    }

    
    public getAge(): number {
        return this.age;
    }

    
    public getColor(): string {
        return this.color;
    }

    
    public getView(): string {
        return `
        \\   /
         \\ /
          V
          O
         / \\
        /   \\
        `;
    }
}


const fox1 = new Fox("Fox Alice", 3, "red");
console.log("Name:", fox1.getName());
console.log("Age:", fox1.getAge());
console.log("Color:", fox1.getColor());
console.log("View:", fox1.getView());

const fox2 = new Fox("Fox Bob");
console.log("Name:", fox2.getName());
console.log("Age:", fox2.getAge());
console.log("Color:", fox2.getColor());
console.log("View:", fox2.getView());
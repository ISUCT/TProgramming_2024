export class Mouse {
    name: string;
    age: number;
    breed: string;
    color: string;

    constructor(mousename: string, mouseage: number, mousebreed: string, mousecolor: string) {
        this.name = mousename;
        this.age = mouseage;
        this.breed = mousebreed;
        this.color = mousecolor;
    }

    get getName(): string {
        return this.name;
    }

    set setName(valuename: string) {
        this.name = valuename;
    }

    get getAge(): number {
        return this.age;
    }

    set setAge(valueage: number) {
        if (valueage < 0 || valueage > 3) {
            console.error("Mice can't live that long");
        } else {
            this.age = valueage;
        }
    }

    get getBreed(): string {
        return this.breed;
    }

    set setBreed(valuebreed: string) {
        this.breed = valuebreed;
    }

    get getColor(): string {
        return this.color;
    }

    set setColor(valuecolor: string) {
        this.color = valuecolor;
    }


    get getInfo(): string {
        return `Mouse's name: ${this.name}, mouse's age: ${this.age}, mouse's breed: ${this.breed}, mouse's color: ${this.color}`;
    }

    changeMouseName(newname: string): void {
        this.name = newname;
    }

    whereFrom(): string {
        if (this.name === 'Mickey') {
            return "Disneyland";
        } else if (this.name === "Jerry") {
            return "Cartoon";
        } else {
            return "sorryyy(";
        }
    }
}

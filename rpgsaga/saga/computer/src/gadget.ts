export class Gadget {
    brand: string;
    model: string;
    is_on: boolean;

    constructor(brand: string, model: string) {
        this.brand = brand;
        this.model = model;
        this.is_on = false;
    }

    turnOn(): void {
        if (!this.is_on) {
            this.is_on = true;
            console.log(`${this.brand} ${this.model} is now ON.`);
        } else {
            console.log(`${this.brand} ${this.model} is already ON.`);
        }
    }

    turnOff(): void {
        if (this.is_on) {
            this.is_on = false;
            console.log(`${this.brand} ${this.model} is now OFF.`);
        } else {
            console.log(`${this.brand} ${this.model} is already OFF.`);
        }
    }

    getStatus(): string {
        const status = this.is_on ? "ON" : "OFF";
        return `${this.brand} ${this.model} is ${status}.`;
    }
}
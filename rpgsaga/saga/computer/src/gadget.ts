export class Gadget {
    brand: string;
    model: string;
    isOn: boolean;

    constructor(brand: string, model: string) {
        this.brand = brand;
        this.model = model;
        this.isOn = false;
    }

    turnOn(): void {
        if (!this.isOn) {
            this.isOn = true;
            console.log(`${this.brand} ${this.model} is now ON.`);
        } else {
            console.log(`${this.brand} ${this.model} is already ON.`);
        }
    }

    turnOff(): void {
        if (this.isOn) {
            this.isOn = false;
            console.log(`${this.brand} ${this.model} is now OFF.`);
        } else {
            console.log(`${this.brand} ${this.model} is already OFF.`);
        }
    }

    getStatus(): string {
        const status = this.isOn ? "ON" : "OFF";
        return `${this.brand} ${this.model} is ${status}.`;
    }
}
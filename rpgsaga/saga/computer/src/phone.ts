import { Gadget } from "./gadget";

export class Phone extends Gadget {
    battery_level: number;

    constructor(brand: string, model: string, battery_level: number = 100) {
        super(brand, model);
        this.battery_level = battery_level;
    }

    charge(percentage: number): void {
        this.battery_level += percentage;
        if (this.battery_level > 100) {
            this.battery_level = 100;
        }
        console.log(`Battery level is now ${this.battery_level}%.`);
    }

    getBatteryLevel(): number {
        return this.battery_level;
    }

    getStatus(): string {
        const status = this.is_on ? "ON" : "OFF";
        return `${this.brand} ${this.model} is ${status} with ${this.battery_level}% battery.`;
    }
}
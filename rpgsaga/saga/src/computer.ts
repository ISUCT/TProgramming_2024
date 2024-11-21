// src/Computer.ts
export class Computer {
    brand: string;
    model: string;
    hard_disk_size: number;
    is_on: boolean;

    constructor(brand: string, model: string, hard_disk_size: number = 500) {
        this.brand = brand;
        this.model = model;
        this.hard_disk_size = hard_disk_size;
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

    setHardDiskSize(size: number): void {
        this.hard_disk_size = size;
        console.log(`Hard disk size set to ${this.hard_disk_size} GB.`);
    }

    getHardDiskSize(): number {
        return this.hard_disk_size;
    }

    getStatus(): string {
        const status = this.is_on ? "ON" : "OFF";
        return `${this.brand} ${this.model} is ${status} with ${this.hard_disk_size} GB hard disk.`;
    }
}
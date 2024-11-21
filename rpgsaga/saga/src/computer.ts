// src/Computer.ts
export class Computer {
    brand: string;
    model: string;
    hardDiskSize: number;
    isOn: boolean;

    constructor(brand: string, model: string, hardDiskSize = 500) {
        this.brand = brand;
        this.model = model;
        this.hardDiskSize = hardDiskSize;
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

    setHardDiskSize(size: number): void {
        this.hardDiskSize = size;
        console.log(`Hard disk size set to ${this.hardDiskSize} GB.`);
    }

    getHardDiskSize(): number {
        return this.hardDiskSize;
    }

    getStatus(): string {
        const status = this.isOn ? "ON" : "OFF";
        return `${this.brand} ${this.model} is ${status} with ${this.hardDiskSize} GB hard disk.`;
    }
}
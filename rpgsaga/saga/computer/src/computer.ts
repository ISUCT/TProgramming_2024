import { Gadget } from "./gadget";

export class Computer extends Gadget {
    hard_disk_size: number;

    constructor(brand: string, model: string, hard_disk_size: number = 500) {
        super(brand, model);
        this.hard_disk_size = hard_disk_size;
    }

    setHardDiskSize(size: number): void {
        this.hard_disk_size = size;
        console.log(`Hard disk size set to ${this.hard_disk_size} GB.`);
    }

    getHardDiskSize(): number {
        return this.hard_disk_size;
    }

    getStatus(): string {
        const status = this.isOn ? "ON" : "OFF";
        return `${this.brand} ${this.model} is ${status} with ${this.hard_disk_size} GB hard disk.`;
    }
}
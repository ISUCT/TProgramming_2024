import { Vehicle } from '../classVehicle/classVehicle'

export class SportCar extends Vehicle {
    _power: number;

    constructor(brand: string, speed: number, color: string, power: number) {
        super(brand, speed, color);
        this._power = power;
    }

    driveForward() {
        console.log("Your", this._brand, "drive forward.");
    }

    driveReverse() {
        console.log("Your", this._brand, "drive reverse.");
    }

    get power(): number {
        return this._power;
    }

    set power(newPower: number) {
        if (newPower <= 2028 && newPower > 0) {
            this._power = newPower;
        } else {
            throw new Error("Автомобиля такой мощности еще не изобрели.");
        }
    }

    toString(): string {
        return `SportCar: {brand: ${this._brand}, speed: ${this._speed}, color: ${this.color}, Power: ${this._power}}`;
     }
}
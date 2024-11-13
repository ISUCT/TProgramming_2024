import { Vehicle } from "../classVehicle/classVehicle"

export class Truck extends Vehicle {
     _wheelBaseLength: number;
     
     constructor(brand: string, speed: number, color: string, wheelBaseLength: number) {
        super(brand, speed, color);
        this._wheelBaseLength = wheelBaseLength;
     }

     driveForward() {
        console.log("Your", this._brand, "drive forward.");
     }

     driveReverse() {
        console.log("Your", this._brand, "drive reverse.")
     }

     get wheelBaseLength(): number {
        return this._wheelBaseLength;
     }

     set wheelBaseLength(newWheelBaseLength: number) {
        if (newWheelBaseLength > 0 && newWheelBaseLength <= 11) {
            this._wheelBaseLength = newWheelBaseLength
        } else {
            throw new Error("Колесную базу такой длины еще не изобрели.")
        }
     }

     toString(): string {
        return `Truck: {brand: ${this._brand}, speed: ${this._speed}, color: ${this.color}, Wheel Base Length: ${this._wheelBaseLength}}`;
     }
}
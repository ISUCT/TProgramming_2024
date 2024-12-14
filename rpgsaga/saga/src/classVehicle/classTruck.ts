import { Vehicle } from '../classVehicle/classVehicle';

export class Truck extends Vehicle {
  wheelBaseLengtH: number;

  constructor(brand: string, speed: number, color: string, wheelBaseLength: number) {
    super(brand, speed, color);
    this.wheelBaseLengtH = wheelBaseLength;
  }

  driveForward() {
    console.log('Your', this.branD, 'drive forward.');
  }

  driveReverse() {
    console.log('Your', this.branD, 'drive reverse.');
  }

  get wheelBaseLength(): number {
    return this.wheelBaseLengtH;
  }

  set wheelBaseLength(newWheelBaseLength: number) {
    if (newWheelBaseLength > 0 && newWheelBaseLength <= 11) {
      this.wheelBaseLengtH = newWheelBaseLength;
    } else {
      throw new Error('Колесную базу такой длины еще не изобрели.');
    }
  }

  toString(): string {
    return `Truck: {brand: ${this.branD}, speed: ${this.speeD}, color: ${this.coloR}, Wheel Base Length: ${this.wheelBaseLengtH}}`;
  }
}

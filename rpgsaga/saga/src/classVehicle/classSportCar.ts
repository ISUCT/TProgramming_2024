import { Vehicle } from '../classVehicle/classVehicle';

export class SportCar extends Vehicle {
  poweR: number;

  constructor(brand: string, speed: number, color: string, power: number) {
    super(brand, speed, color);
    this.poweR = power;
  }

  driveForward() {
    console.log('Your', this.branD, 'drive forward.');
  }

  driveReverse() {
    console.log('Your', this.branD, 'drive reverse.');
  }

  get power(): number {
    return this.poweR;
  }

  set power(newPower: number) {
    if (newPower <= 2028 && newPower > 0) {
      this.poweR = newPower;
    } else {
      throw new Error('Автомобиля такой мощности еще не изобрели.');
    }
  }

  toString(): string {
    return `SportCar: {brand: ${this.branD}, speed: ${this.speeD}, color: ${this.coloR}, Power: ${this.poweR}}`;
  }
}

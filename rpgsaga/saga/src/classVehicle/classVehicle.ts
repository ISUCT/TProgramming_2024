export abstract class Vehicle {
  branD: string;
  speeD: number;
  coloR: string;

  constructor(brand: string, speed: number, color: string) {
    this.branD = brand;
    this.speeD = speed;
    this.coloR = color;
  }

  abstract driveForward(): void;

  abstract driveReverse(): void;

  get speed(): number {
    return this.speeD;
  }

  set speed(newSpeed: number) {
    if (newSpeed >= 0 && newSpeed <= 499) {
      this.speeD = newSpeed;
    } else {
      throw new Error('Скорость не может принимать такое значение.');
    }
  }

  get color(): string {
    return this.coloR;
  }

  set color(newColor: string) {
    const colorLength = newColor.length;
    if (colorLength <= 57) {
      this.coloR = newColor;
    } else {
      throw new Error('Цвет не может иметь такое длинное название.');
    }
  }

  get brand(): string {
    return this.branD;
  }

  set brand(newBrand: string) {
    const brandLength = newBrand.length;
    if (brandLength <= 13) {
      this.branD = newBrand;
    } else {
      throw new Error('Имя бренда не может быть таким длинным.');
    }
  }
}

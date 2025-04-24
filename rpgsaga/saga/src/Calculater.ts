export class Calculater {
  static random(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  static isEven(num: number): boolean {
    return num % 2 === 0;
  }
  static booleanRandom(): boolean {
    if (Math.random() < 0.5) {
      return true;
    } else {
      return false;
    }
  }
}

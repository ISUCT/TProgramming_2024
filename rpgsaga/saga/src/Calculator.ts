export class Calculator{
    static random(min: number, max: number){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    static isEven(number): boolean {
        return number % 2 == 0;
      }
}

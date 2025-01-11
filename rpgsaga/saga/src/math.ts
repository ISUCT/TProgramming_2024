import { Hero } from "./Hero";

export class MathUt {
    static random(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static isEven(num: number): boolean {
        return num % 2 === 0;
    }

    static booleanRandom(): boolean {
        return Math.random() < 0.5;
    }
}




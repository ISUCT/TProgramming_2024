import { Hero } from "../lastlab/Hero";
import { Knight } from "../nasledniki/Knight";
import { _Ability } from "../lastlab/ability";
import { getRandomElement } from "../lastlab/randomizerArrayElement";

const knightNames: string[] = ["Генрих", "Фридрих", "Ровооам", "Боб", "Коул"];
const healthValue: number[] = [95, 100, 105, 110, 115, 120];
const strengthValue: number[] = [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
const manaValue: number[] = [10, 15, 20, 25];

export class fabricKnight {
    public static createRandomKnight(names: string[], healthValues: number[], strengthValues: number[], manaValues: number[]): Knight {
        const name = getRandomElement(knightNames);
        const health = getRandomElement(healthValue);
        const strength = getRandomElement(strengthValue);
        const mana = getRandomElement(manaValue);
        return new Knight(name, health, strength, mana)
    }

    public static formatKnight(knight: Knight): string {
        return `
        Имя: ${knight._name}
        Здоровье: ${knight._health}
        Сила: ${knight._strength}
        Мана: ${knight._mana}
        `;
    }
}

console.log("ПРОВЕРКА ГЕНЕРАЦИИ РЫЦАРЯ");
const randomKnight = fabricKnight.createRandomKnight(knightNames, healthValue, strengthValue, manaValue);
console.log(fabricKnight.formatKnight(randomKnight));
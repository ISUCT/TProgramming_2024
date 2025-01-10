import { Hero } from "../lastlab/Hero";
import { Orc } from "../nasledniki/Orc";
import { _Ability } from "../lastlab/ability";
import { getRandomElement } from "../lastlab/randomizerArrayElement";

const orcNames: string[] = ["Гнолл", "Гразоб", "Гришнакх", "Гулдан", "Гуларзоб", "Кракнур", "Фаргул", "Рагнар", "Зугрор"];
const healthValue: number[] = [105, 110, 115, 120, 125, 130, 135];
const strengthValue: number[] = [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
const manaValue: number[] = [15, 20, 25, 30];

export class fabricOrc {
    public static createRandomOrc(names: string[], healthValues: number[], strengthValues: number[], manaValues: number[]): Orc {
        const name = getRandomElement(orcNames);
        const health = getRandomElement(healthValue);
        const strength = getRandomElement(strengthValue);
        const mana = getRandomElement(manaValue);
        return new Orc(name, health, strength, mana)
    }

    public static formatOrc(orc: Orc): string {
        return `
        Имя: ${orc._name}
        Здоровье: ${orc._health}
        Сила: ${orc._strength}
        Мана: ${orc._mana}
        `
    }
}

console.log('ПРОВЕРКА ГЕНЕРАЦИИ ОРКА');
const randomOrc = fabricOrc.createRandomOrc(orcNames, healthValue, strengthValue, manaValue);
console.log(fabricOrc.formatOrc(randomOrc));
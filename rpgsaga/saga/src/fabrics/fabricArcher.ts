import { Hero } from "../lastlab/Hero";
import { Archer } from "../nasledniki/Archer";
import { _Ability } from "../lastlab/ability";
import { getRandomElement } from "../lastlab/randomizerArrayElement";

const archerNames: string[] = ["Леголас", "Соколиный Глаз", "Миракл", "Робин Гуд", "Венди"];
const healthValue: number[] = [80, 85, 90, 95, 100];
const strengthValue: number[] = [15, 16, 17, 18, 19, 20];
const manaValue: number[] = [30, 35, 40, 45];

export class fabricArcher {
    public static createRandomArcher(names: string[], healthValues: number[], strengthValues: number[], manaValues: number[]): Archer {
        const name = getRandomElement(names);
        const health = getRandomElement(healthValues);
        const strength = getRandomElement(strengthValues);
        const mana = getRandomElement(manaValues);
        return new Archer(name, health, strength, mana);
    }

    public static formatArcher(archer: Archer): string {
        return `
        Имя: ${archer._name}
        Здоровье: ${archer._health}
        Сила: ${archer._strength}
        Мана: ${archer._mana}
        `;
    }
}

console.log("ПРОВЕРКА ГЕНЕРАЦИИ ЛУЧНИКА");
const randomArcher = fabricArcher.createRandomArcher(archerNames, healthValue, strengthValue, manaValue);
console.log(fabricArcher.formatArcher(randomArcher));
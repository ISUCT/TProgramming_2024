import { Hero } from "../lastlab/Hero";
import { Wizard } from "../nasledniki/Wizard";
import { _Ability } from "../lastlab/ability";
import { getRandomElement } from "../lastlab/randomizerArrayElement";

const wizardNames: string[] = ["Дизраптор", "Рубик", "Варлок", "Кристал Мэйден", "Пугна", "Малфурион", "Инвокер"];
const healthValue: number[] = [75, 80, 85, 90, 95, 100];
const strengthValue: number[] = [18, 19, 20, 21, 22, 23, 24, 25];
const manaValue: number[] = [30, 35, 40, 45];

export class fabricWizard {
    public static createRandomWizard(names: string[], healthValues: number[], strengthValues: number[], manaValues: number[]): Wizard {
        const name = getRandomElement(wizardNames);
        const health =getRandomElement(healthValue);
        const strength = getRandomElement(strengthValue);
        const mana =getRandomElement(manaValue);
        return new Wizard(name, health, strength, mana)
    }

    public static formatWizard(Wizard: Wizard): string {
        return `
        Имя: ${Wizard._name}
        Здоровье: ${Wizard._health}
        Сила: ${Wizard._strength}
        Мана: ${Wizard._mana}
        `
    }
}

console.log('ПРОВЕРКА ГЕНЕРАЦИИ КОЛДУНА');
const randomWizard = fabricWizard.createRandomWizard(wizardNames, healthValue, strengthValue, manaValue);
console.log(fabricWizard.formatWizard(randomWizard));
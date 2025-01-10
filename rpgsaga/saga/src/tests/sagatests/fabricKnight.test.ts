import { arch } from "os";
import { Knight } from "../../nasledniki/Knight";
import { fabricKnight } from "../../fabrics/fabricKnight";

describe('fabricKnight', () => {
    const knightNames: string[] = ["Генрих", "Фридрих", "Ровооам", "Боб", "Коул"];
    const healthValue: number[] = [95, 100, 105, 110, 115, 120];
    const strengthValue: number[] = [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
    const manaValue: number[] = [10, 15, 20, 25];

    test('createRandomKnight должен возвращать героя лучника', () => {
        const randomKnight = fabricKnight.createRandomKnight(knightNames, healthValue, strengthValue, manaValue);
        expect(randomKnight).toBeInstanceOf(Knight);
    });

    test('имя должно быть из значений массива knightNames', () => {
        const randomKnight = fabricKnight.createRandomKnight(knightNames, healthValue, strengthValue, manaValue);
        expect(knightNames).toContain(randomKnight._name);
    });

    test('здоровье должно быть из значений массива healthValue', () => {
        const randomKnight = fabricKnight.createRandomKnight(knightNames, healthValue, strengthValue, manaValue);
        expect(healthValue).toContain(randomKnight._health);
    });

    test('сила должна быть из значений массива strengthValue', () => {
        const randomKnight = fabricKnight.createRandomKnight(knightNames, healthValue, strengthValue, manaValue);
        expect(strengthValue).toContain(randomKnight._strength);
    });

    test('мана должна быть из значений массива manaValue', () => {
        const randomKnight = fabricKnight.createRandomKnight(knightNames, healthValue, strengthValue, manaValue);
        expect(manaValue).toContain(randomKnight._mana);
    });

    test('вывод информации о герое должен быть отформатирован', () => {
        const randomKnight = fabricKnight.createRandomKnight(knightNames, healthValue, strengthValue, manaValue);
        const formattedString = fabricKnight.formatKnight(randomKnight);
        expect(formattedString).toContain(`Имя: ${randomKnight._name}`);
        expect(formattedString).toContain(`Здоровье: ${randomKnight._health}`);
        expect(formattedString).toContain(`Сила: ${randomKnight._strength}`);
        expect(formattedString).toContain(`Мана: ${randomKnight._mana}`);
    });
});

import { arch } from "os";
import { Orc } from "../../nasledniki/Orc";
import { fabricOrc } from "../../fabrics/fabricOrc";

describe('fabricOrc', () => {
    
    const orcNames: string[] = ["Гнолл", "Гразоб", "Гришнакх", "Гулдан", "Гуларзоб", "Кракнур", "Фаргул", "Рагнар", "Зугрор"];
    const healthValue: number[] = [105, 110, 115, 120, 125, 130, 135];
    const strengthValue: number[] = [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
    const manaValue: number[] = [15, 20, 25, 30];

    test('createRandomOrc должен возвращать героя лучника', () => {
        const randomOrc = fabricOrc.createRandomOrc(orcNames, healthValue, strengthValue, manaValue);
        expect(randomOrc).toBeInstanceOf(Orc);
    });

    test('имя должно быть из значений массива orcNames', () => {
        const randomOrc = fabricOrc.createRandomOrc(orcNames, healthValue, strengthValue, manaValue);
        expect(orcNames).toContain(randomOrc._name);
    });

    test('здоровье должно быть из значений массива healthValue', () => {
        const randomOrc = fabricOrc.createRandomOrc(orcNames, healthValue, strengthValue, manaValue);
        expect(healthValue).toContain(randomOrc._health);
    });

    test('сила должна быть из значений массива strengthValue', () => {
        const randomOrc = fabricOrc.createRandomOrc(orcNames, healthValue, strengthValue, manaValue);
        expect(strengthValue).toContain(randomOrc._strength);
    });

    test('мана должна быть из значений массива manaValue', () => {
        const randomOrc = fabricOrc.createRandomOrc(orcNames, healthValue, strengthValue, manaValue);
        expect(manaValue).toContain(randomOrc._mana);
    });

    test('вывод информации о герое должен быть отформатирован', () => {
        const randomOrc = fabricOrc.createRandomOrc(orcNames, healthValue, strengthValue, manaValue);
        const formattedString = fabricOrc.formatOrc(randomOrc);
        expect(formattedString).toContain(`Имя: ${randomOrc._name}`);
        expect(formattedString).toContain(`Здоровье: ${randomOrc._health}`);
        expect(formattedString).toContain(`Сила: ${randomOrc._strength}`);
        expect(formattedString).toContain(`Мана: ${randomOrc._mana}`);
    });
});

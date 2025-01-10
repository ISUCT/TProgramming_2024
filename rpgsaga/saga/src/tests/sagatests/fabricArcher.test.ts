import { arch } from "os";
import { fabricArcher } from "../../fabrics/fabricArcher";
import { Archer } from "../../nasledniki/Archer";

describe('fabricArcher', () => {
    const archerNames = ["Леголас", "Соколиный Глаз", "Миракл", "Робин Гуд", "Венди"];
    const healthValue = [80, 85, 90, 95, 100];
    const strengthValue = [15, 16, 17, 18, 19, 20];
    const manaValue = [30, 35, 40, 45];

    test('createRandomArcher должен возвращать героя лучника', () => {
        const randomArcher = fabricArcher.createRandomArcher(archerNames, healthValue, strengthValue, manaValue);
        expect(randomArcher).toBeInstanceOf(Archer);
    });

    test('имя должно быть из значений массива archerNames', () => {
        const randomArcher = fabricArcher.createRandomArcher(archerNames, healthValue, strengthValue, manaValue);
        expect(archerNames).toContain(randomArcher._name);
    });

    test('здоровье должно быть из значений массива healthValue', () => {
        const randomArcher = fabricArcher.createRandomArcher(archerNames, healthValue, strengthValue, manaValue);
        expect(healthValue).toContain(randomArcher._health);
    });

    test('сила должна быть из значений массива strengthValue', () => {
        const randomArcher = fabricArcher.createRandomArcher(archerNames, healthValue, strengthValue, manaValue);
        expect(strengthValue).toContain(randomArcher._strength);
    });
    
    test('мана должна быть из значений массива manaValue', () => {
        const randomArcher = fabricArcher.createRandomArcher(archerNames, healthValue, strengthValue, manaValue);
        expect(manaValue).toContain(randomArcher._mana);
    });

    test('вывод информации о герое должен быть отформатирован', () => {
        const randomArcher = fabricArcher.createRandomArcher(archerNames, healthValue, strengthValue, manaValue);
        const formattedString = fabricArcher.formatArcher(randomArcher);
        expect(formattedString).toContain(`Имя: ${randomArcher._name}`);
        expect(formattedString).toContain(`Здоровье: ${randomArcher._health}`);
        expect(formattedString).toContain(`Сила: ${randomArcher._strength}`);
        expect(formattedString).toContain(`Мана: ${randomArcher._mana}`);
    });
});

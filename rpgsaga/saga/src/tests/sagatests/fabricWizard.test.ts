import { arch } from "os";
import { Wizard } from "../../nasledniki/Wizard";
import { fabricWizard } from "../../fabrics/fabricWizard";

describe('fabricWizard', () => {

    const wizardNames: string[] = ["Дизраптор", "Рубик", "Варлок", "Кристал Мэйден", "Пугна", "Малфурион", "Инвокер"];
    const healthValue: number[] = [75, 80, 85, 90, 95, 100];
    const strengthValue: number[] = [18, 19, 20, 21, 22, 23, 24, 25];
    const manaValue: number[] = [30, 35, 40, 45];

    test('createRandomWizard должен возвращать героя лучника', () => {
        const randomWizard = fabricWizard.createRandomWizard(wizardNames, healthValue, strengthValue, manaValue);
        expect(randomWizard).toBeInstanceOf(Wizard);
    });

    test('имя должно быть из значений массива wizardNames', () => {
        const randomWizard = fabricWizard.createRandomWizard(wizardNames, healthValue, strengthValue, manaValue);
        expect(wizardNames).toContain(randomWizard._name);
    });

    test('здоровье должно быть из значений массива healthValue', () => {
        const randomWizard = fabricWizard.createRandomWizard(wizardNames, healthValue, strengthValue, manaValue);
        expect(healthValue).toContain(randomWizard._health);
    });

    test('сила должна быть из значений массива strengthValue', () => {
        const randomWizard = fabricWizard.createRandomWizard(wizardNames, healthValue, strengthValue, manaValue);
        expect(strengthValue).toContain(randomWizard._strength);
    });

    test('мана должна быть из значений массива manaValue', () => {
        const randomWizard = fabricWizard.createRandomWizard(wizardNames, healthValue, strengthValue, manaValue);
        expect(manaValue).toContain(randomWizard._mana);
    });

    test('вывод информации о герое должен быть отформатирован', () => {
        const randomWizard = fabricWizard.createRandomWizard(wizardNames, healthValue, strengthValue, manaValue);
        const formattedString = fabricWizard.formatWizard(randomWizard);
        expect(formattedString).toContain(`Имя: ${randomWizard._name}`);
        expect(formattedString).toContain(`Здоровье: ${randomWizard._health}`);
        expect(formattedString).toContain(`Сила: ${randomWizard._strength}`);
        expect(formattedString).toContain(`Мана: ${randomWizard._mana}`);
    });
});

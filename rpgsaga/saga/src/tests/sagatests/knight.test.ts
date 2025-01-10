import { Hero } from "../../lastlab/Hero";
import { Logger } from "../../lastlab/Logger";
import { Knight } from "../../nasledniki/Knight";
import { Wizard } from "../../nasledniki/Wizard";
import { Orc } from "../../nasledniki/Orc";
import { Archer } from "../../nasledniki/Archer";

describe('тесты рыцаря', () => {
    let knight: Knight;
    let archer: Archer;
    let orc: Orc;

    beforeEach(() => {
        knight = new Knight('Джейм', 110, 20, 10);
        archer = new Archer('Леголас', 100, 15, 30);
        orc = new Orc('Гнолл', 120, 25, 20);
    });

    test('удар возмездия и нанесение дамага', () => {
        const result = knight.strikeBack(archer);
        const skillDamage = Math.floor(knight._strength * 1.3);
        expect(result).toMatch(/наносит \[Лучник\] Леголас способностью "Удар возмездия" невероятные 26 единиц урона/);
        expect(archer.getHealth).toBe(100 - skillDamage);
        expect(knight._mana).toBe(10 - 5);
    });

    test('нехватка маны', () => {
        knight._mana = 4;
        const result = knight.strikeBack(archer);
        expect(result).toMatch(/не имеет достаточно маны для использования своей способности "Удара возмездия"/);
        expect(archer.getHealth).toBe(100);
        expect(knight._mana).toBe(4);
    });

    test('аттака врага и нанесение дамага', () => {
        const result = knight.attack(orc);
        expect(result).toMatch(/атакует Гнолл, нанося/);
        expect(orc.getHealth).toBe(120 - knight._strength);
    });

    test('рыцарь должен либо атачить либо юзать скилл', () => {
        jest.spyOn(Math, 'random').mockReturnValue(0.4);
        const result = knight.useAbility(archer);
        expect(result).toMatch(/наносит \[Лучник\] Леголас способностью "Удар возмездия" невероятные 26 единиц урона/);
        expect(archer.getHealth).toBeLessThan(100);
    });

    test('Дуэль: рыцаря против орка', () => {
        let round = 1;
        while(knight.getHealth > 0 && orc.getHealth > 0) {
            console.log(`Раунд ${round}`);
            knight.attack(orc);
            if (orc.getHealth > 0) {
                orc.attack(knight);
            }
            round++;
        }

        expect(knight.getHealth).toBeGreaterThan(0); // Проверяем, что рыцарь выживает
        expect(orc.getHealth).toBeLessThan(120); // Проверяем, что орк получает урон
    });

    test('рыцарь должен использовать свою способность с шансом 40 процентов', () => {
        jest.spyOn(Math, 'random').mockReturnValue(0.4);
        knight.useAbility(orc);
        expect(orc.getHealth).toBeLessThan(120); // Проверяем, что здоровье орка уменьшается

        jest.spyOn(Math, 'random').mockReturnValue(0.6);
        knight.useAbility(orc);
        expect(orc.getHealth).toBe(120); // Проверяем, что здоровье орка не изменилось
    });
});

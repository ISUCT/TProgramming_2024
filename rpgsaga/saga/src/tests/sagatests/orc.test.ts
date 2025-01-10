import { Hero } from "../../lastlab/Hero";
import { Logger } from "../../lastlab/Logger";
import { Orc } from "../../nasledniki/Orc";
import { Knight } from "../../nasledniki/Knight";

describe('Orc Class Tests', () => {
    let orc: Orc;
    let knight: Knight;

    beforeEach(() => {
        orc = new Orc('Сморд', 100, 25, 30);
        knight = new Knight('Рузвельт', 100, 20, 10);
    });

    test('используем способность вой орка', () => {
        const result = orc.orcHowl(knight);
        expect(result).toBe(
            '[Орк] Сморд оглушил [Рыцарь] Рузвельт, теперь у него ЗВОН В УШАХ! Следующая его атака будет отражена на него самого.'
        );
        expect(orc.tinnitus).toBe(true);
        expect(orc._mana).toBe(15);
    });

    test('недостаточно маны', () => {
        orc._mana = 10;
        const result = orc.orcHowl(knight);
        expect(result).toBe(
            '[Орк] Сморд не имеет достаточного количества маны, необходимой для активации способности'
        );
        expect(orc.tinnitus).toBe(false);
        expect(knight.getHealth).toBe(100);
    });

    test('отражение урона при оглушении от способности', () => {
        orc.tinnitus = true; // Активируем "звон в ушах"
        const result = orc.getDamage(15); // Орк получает урон
        expect(result).toBe(
            '[Орк] Сморд отражает 15 единиц урона на [Рыцарь] Рузвельт'
        );
        expect(knight.getHealth).toBe(100 - 15); // Рыцарь получает отражённый урон
        expect(orc.tinnitus).toBe(false); // Эффект сбрасывается
    });

    test('гибель орка', () => {
        orc.getDamage(100); // Наносим летальный урон
        expect(orc.getHealth).toBe(0);
        expect(orc.isAlive).toBe(false);
    });

    test('аттака и нанесение урона', () => {
        const result = orc.attack(knight);
        expect(result).toBe(
            '[Орк] Сморд атакует [Рыцарь] Рузвельт, нанося 25 урона.'
        );
        expect(knight.getHealth).toBe(100 - orc._strength);
    });

    test('орк должен использовать свою способность, либо атаковать', () => {
        jest.spyOn(Math, 'random').mockReturnValue(0.4); // Гарантированно срабатывает способность
        const result = orc.useAbility(knight);
        expect(result).toBe(
            '[Орк] Сморд оглушил [Рыцарь] Рузвельт, теперь у него ЗВОН В УШАХ! Следующая его атака будет отражена на него самого.'
        );

        jest.spyOn(Math, 'random').mockReturnValue(0.6); // Гарантированно срабатывает атака
        const result2 = orc.useAbility(knight);
        expect(result2).toMatch(
            /$$Орк$$ Сморд атакует $$Рыцарь$$ Рузвельт/
        );
    });
});
import { Orc } from "../../nasledniki/Orc";
import { Knight } from "../../nasledniki/Knight";
import { Logger } from "../../lastlab/Logger";
import { Hero } from "../../lastlab/Hero";


describe('Orc Class Tests', () => {
    let orc: Orc;
    let knight: Knight;

    beforeEach(() => {
        orc = new Orc('Сморд', 100, 25, 30);
        knight = new Knight('Рузвельт', 100, 20, 10);
    });

    test('используем способность вой орка', () => {
        const result = orc.orcHowl(knight);
        expect(orc.tinnitus).toBe(true); // проверяем глушанул ли орк рыцаря
        expect(orc._mana).toBe(15); // проверяем что манна уменьшилась
    });

    test('недостаточно маны для способности', () => {
        orc._mana = 10;
        const result = orc.orcHowl(knight);
        expect(orc.tinnitus).toBe(false);
    });

    test('отражение урона при оглушении от способности', () => {
        orc.tinnitus = true; 
        knight.getDamage(15);
    
        expect(knight.getHealth).toBe(85); 
        expect(orc.getHealth).toBe(100);
    });

    test('гибель орка', () => {
        orc.getDamage(100);
        expect(orc.isAlive).toBe(false); // помер ли наш орк - загадка жака фреско
    });

    test('аттака и нанесение урона', () => {
        orc.attack(knight);
        expect(knight.getHealth).toBe(100 - orc._strength); 
    });

    test('орк должен использовать свою способность, либо атаковать', () => {
        jest.spyOn(Math, 'random').mockReturnValue(0.4); 
        orc.useAbility(knight);
        expect(orc.tinnitus).toBe(true);

        jest.spyOn(Math, 'random').mockReturnValue(0.6);
        orc.useAbility(knight);
        expect(knight.getHealth).toBe(100 - orc._strength);
    });

    test('восстановление оригинальной силы', () => {
        orc.orcHowl(knight);
        expect(orc._strength).toBeGreaterThan(25);
        orc.restoreOriginalStrength();
        expect(orc._strength).toBe(25);
    });
});
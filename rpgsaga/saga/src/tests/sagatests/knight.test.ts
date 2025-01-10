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
        knight = new Knight('Джейм', 130, 20, 10);
        archer = new Archer('Леголас', 100, 15, 30);
        orc = new Orc('Гнолл', 120, 25, 20);
    });

    test('удар возмездия и нанесение дамага', () => {
        const initialArcherHealth = archer.getHealth;
        const skillDamage = Math.floor(knight._strength * 1.3);
        
        knight.strikeBack(archer);
        
        expect(archer.getHealth).toBe(initialArcherHealth - skillDamage);
        expect(knight._mana).toBe(5);
    });

    test('нехватка маны', () => {
        knight._mana = 4;
        const initialArcherHealth = archer.getHealth;
        
        knight.strikeBack(archer);
        
        expect(archer.getHealth).toBe(initialArcherHealth);
        expect(knight._mana).toBe(4); 
    });

    test('аттака врага и нанесение дамага', () => {
        const initialOrcHealth = orc.getHealth;

        knight.attack(orc);

        expect(orc.getHealth).toBe(initialOrcHealth - knight._strength);
    });

    test('рыцарь должен либо атачить либо юзать скилл', () => {
        jest.spyOn(Math, 'random').mockReturnValue(0.4);
        const initialArcherHealth = archer.getHealth;

        knight.useAbility(archer);
        
        //проверям что хп уменьшилось
        expect(archer.getHealth).toBeLessThan(initialArcherHealth);
    });

    test('Дуэль: рыцаря против орка', () => {
        let round = 1;

        expect(knight.getHealth).toBe(130);
        expect(orc.getHealth).toBe(120);

        while (knight.getHealth > 0 && orc.getHealth > 0) {
            knight.attack(orc);
            if (orc.getHealth > 0) {
                orc.attack(knight);
            }
            round++;
        }

        expect(knight.getHealth).toBeGreaterThan(0);
        expect(orc.getHealth).toBeLessThan(120);
    });

    test('рыцарь должен использовать свою способность с шансом 40 процентов', () => {
        jest.spyOn(Math, 'random').mockReturnValue(0.4);
        const initialOrcHealth = orc.getHealth;

        knight.useAbility(orc);
        expect(orc.getHealth).toBeLessThan(initialOrcHealth); //смотрим на уменьшение хп орка

        jest.spyOn(Math, 'random').mockReturnValue(0.6);
        knight.useAbility(orc);
        expect(orc.getHealth).toBe(74); // проверяем что хп у орка не изменились
    });
});

import { arch } from "os";
import { Hero } from "../../lastlab/Hero";
import { Logger } from "../../lastlab/Logger";
import { Archer } from "../../nasledniki/Archer";
import { Orc } from "../../nasledniki/Orc";

jest.mock('../lastlab/Logger');

describe('Archer testiki', () => {
    let archer: Archer;
    let enemy: Orc;

    beforeEach(() => {
        archer = new Archer('Соколиный глаз', 100, 15, 30);
        enemy = new Orc('Горгол', 120, 20, 30);
    });

    test('использование огненных стрел и нанесение ими урона', () => {
        const result = archer.useFireArrows(enemy);
        expect(result).toMatch(/использует свою способность "Огненные стрелы"/);
        expect(enemy.getHealth).toBe(120 - Archer.FIRE_ARROW_DAMAGE);
        expect(archer._mana).toBe(30 - Archer.FIRE_ARROW_MANA_COST);
        expect(archer.isFireArrowUsed).toBe(true);
        expect(archer.fireEffectTurns).toBe(3);
        expect(Logger.logAbilityUse).toHaveBeenCalledWith(archer, enemy, 'Огненные стрелы', Archer.FIRE_ARROW_MANA_COST);
    });

    test('недостаточно маны', () => {
        archer.useFireArrows(enemy);
        const result = archer.useFireArrows(enemy);
        expect(result).toMatch(/не хватает маны/);
    });

    test('использование ледяных стрел и нанесение ими урона', () => {
        const result = archer.useIceArrows(enemy);
        expect(result).toMatch(/использует свою способность "Ледяные стрелы"/);
        expect(enemy.getHealth).toBe(120 - Archer.ICE_ARROW_DAMAGE);
        expect(archer._mana).toBe(30 - Archer.ICE_ARROW_MANA_COST);
        expect(archer.iceArrowUses).toBe(1);
        expect(archer.iceEffectTurns).toBe(Archer.ICE_ARROW_TURNS);
        expect(Logger.logAbilityUse).toHaveBeenCalledWith(archer, enemy, 'Ледянные стрелы', Archer.ICE_ARROW_MANA_COST);
    });

    test('невозможность использования ледяных стрел из-за исчерпания ходов с ними', () => {
        archer.iceArrowUses = Archer.MAX_ICE_ARROW_USES;
        const result = archer.useIceArrows(enemy);
        expect(result).toMatch(/уже использовал максимальное количество ледяных стрел/);
    });

    test('нанесение урона от эффекта горения', () => {
        archer.useFireArrows(enemy);
        expect(enemy.getHealth).toBe(120 - Archer.FIRE_ARROW_DAMAGE);
        const log = (archer.applyEffects(enemy));
        expect(log).toMatch(/получает 2 урона от огненного эффекта/);
        expect(enemy.getHealth).toBe(120 - Archer.FIRE_ARROW_DAMAGE - Archer.FIRE_ARROW_DAMAGE)
    });

    test('нанесение урона от эффекта заворожения', () => {
        archer.useIceArrows(enemy);
        expect(enemy.getHealth).toBe(120 - Archer.ICE_ARROW_DAMAGE);
        const log = (archer.applyEffects(enemy));
        expect(log).toMatch(/получает 5 урона от ледяного эффекта/);
        expect(enemy.getHealth).toBe(100 - Archer.ICE_ARROW_DAMAGE - Archer.ICE_ARROW_DAMAGE)
    });

    test('атака и нанесение урона', () => {
        const result = archer.attack(enemy);
        expect(result).toMatch(/атакует/);
        expect(enemy.getHealth).toBe(120 - archer._strength);
        expect(Logger.logAttack).toHaveBeenCalledWith(archer, enemy, archer._strength);
    });
})
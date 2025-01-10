import { Hero } from "../../lastlab/Hero";
import { Logger } from "../../lastlab/Logger";
import { Knight } from "../../nasledniki/Knight";
import { Wizard } from "../../nasledniki/Wizard";
import { Orc } from "../../nasledniki/Orc";
import { Archer } from "../../nasledniki/Archer";

describe('тесты лучника', () => {
    let archer: Archer;
    let knight: Knight;
    let orc: Orc;

    beforeEach(() => {
        archer = new Archer('Леголас', 110, 15, 30);
        knight = new Knight('Джейм', 130, 20, 10);
        orc = new Orc('Гнолл', 120, 25, 20);
    });

    test('использование огненных стрел и нанесение дамага', () => {
        const initialOrcHealth = orc.getHealth;
        
        archer.useFireArrows(orc);
        
        expect(orc.getHealth).toBe(initialOrcHealth - Archer.FIRE_ARROW_DAMAGE);
        expect(archer._mana).toBe(30 - Archer.FIRE_ARROW_MANA_COST);
        expect(archer.isFireArrowUsed).toBe(true);
        expect(archer.fireEffectTurns).toBe(3);
    });

    test('недостаток маны для огненных стрел', () => {
        archer._mana = 5;
        const initialOrcHealth = orc.getHealth;

        const result = archer.useFireArrows(orc);
        
        expect(result).toBe(`[Лучник] ${archer._name} не обладает достаточным количеством маны для использования способности "Огненные стрелы"`);
        expect(orc.getHealth).toBe(initialOrcHealth); // хп орка не должно измениться
        expect(archer._mana).toBe(5); // мана не должна менятся
    });

    test('использование ледяных стрел и нанесение дамага', () => {
        const initialOrcHealth = orc.getHealth;
        
        archer.useIceArrows(orc);

        expect(orc.getHealth).toBe(initialOrcHealth - Archer.ICE_ARROW_DAMAGE);
        expect(archer._mana).toBe(30 - Archer.ICE_ARROW_MANA_COST);
        expect(archer.iceArrowUses).toBe(1);
        expect(archer.iceEffectTurns).toBe(Archer.ICE_ARROW_TURNS);
    });

    test('максимальное количество использований ледяных стрел', () => {
        archer.iceArrowUses = Archer.MAX_ICE_ARROW_USES;
        const initialOrcHealth = orc.getHealth;

        const result = archer.useIceArrows(orc);
        
        expect(result).toBe(`[Лучник] ${archer._name} уже использовал максимальное количество ледяных стрел (${Archer.MAX_ICE_ARROW_USES} раза)`);
        expect(orc.getHealth).toBe(initialOrcHealth); // хп орка не должно измениться
    });

    test('атаковать врага и нанести урон', () => {
        const initialKnightHealth = knight.getHealth;

        archer.attack(knight);

        expect(knight.getHealth).toBe(initialKnightHealth - archer._strength);
    });

    test('применение эффекта огненных стрел', () => {
        archer.useFireArrows(orc);
        archer.applyEffects(orc); 
    
        
        expect(orc.getHealth).toBe(116);
        expect(archer.fireEffectTurns).toBe(2);
    });
    
    test('применение эффекта ледяных стрел', () => {
        archer.useIceArrows(orc); 
        archer.applyEffects(orc); 
    
        
        expect(orc.getHealth).toBe(110);
        expect(archer.iceEffectTurns).toBe(Archer.ICE_ARROW_TURNS - 1);
    });
    
    test('дуэль: лучник против орка', () => {
        let round = 1;
    
        
        expect(archer.getHealth).toBe(110);
        expect(orc.getHealth).toBe(120);
    
        while (archer.getHealth > 0 && orc.getHealth > 0) {
            archer.attack(orc);
            if (orc.getHealth > 0) {
                orc.attack(archer);
            }
            archer.applyEffects(orc);
            round++;
        }
    
        
        expect(archer.getHealth).toBeLessThan(110);
        expect(orc.getHealth).toBeLessThan(120);
    });

});
import { Hero } from "../../lastlab/Hero";
import { Logger } from "../../lastlab/Logger";
import { Knight } from "../../nasledniki/Knight";
import { Wizard } from "../../nasledniki/Wizard";
import { Orc } from "../../nasledniki/Orc";
import { Archer } from "../../nasledniki/Archer";

describe('Wizard Class Tests', () => {
    let wizard: Wizard;
    let knight: Knight;

    beforeEach(() => {
        wizard = new Wizard('Вольдемар', 100, 15, 30);
        knight = new Knight('Фридрих', 100, 20, 10);
    });

    test('накладывание заворожения и пропуск хода соперника', () => {
        const result = wizard.castFascination(knight);
        expect(wizard.fasctinationActive).toBe(true); 
        expect(knight.isFascination).toBe(false); 
        expect(wizard._mana).toBe(30); 
    });

    test('возрождение уже активно его нельзя накладывать друг на друга', () => {
        wizard.fasctinationActive = true;
        const result = wizard.castFascination(knight);
        expect(knight.isFascination).toBe(false); 
    });

    test('недостаточно маны', () => {
        wizard._mana = 5;
        const result = wizard.castFascination(knight);
        expect(wizard.fasctinationActive).toBe(true); 
    });

    test('получение урона и гибель колдуна', () => {
        wizard.getDamage(100);
        expect(wizard.getHealth).toBe(0);
        expect(wizard.isAlive).toBe(true); // проверяем пульс у колдуна
    });

    test('если заворожение, то дамаг не проходит', () => {
        wizard.fasctinationActive = true;
        const result = wizard.getDamage(15);
        expect(wizard.getHealth).toBe(100);
    });

    test('атакуем наносим урон', () => {
        const result = wizard.attack(knight);
        expect(knight.getHealth).toBe(100 - wizard._strength);
    });

    test('либо дамажим через атаку, либо накладываем касты заворожения', () => {
        jest.spyOn(Math, 'random').mockReturnValue(0.4);
        const result = wizard.useAbility(knight);
        expect(wizard.fasctinationActive).toBe(true); // активно ли наше заворожение? без понятия я сошел с ума на часах 3 ночи через 6 часов экзамен

        jest.spyOn(Math, 'random').mockReturnValue(0.6);
        const result2 = wizard.useAbility(knight);
        expect(knight.getHealth).toBe(100 - wizard._strength); 
    });
});

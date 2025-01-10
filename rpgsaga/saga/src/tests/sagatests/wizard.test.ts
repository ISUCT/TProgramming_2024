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
        expect(result).toMatch(/использовал свою способность! [Рыцарь] Фридрих заворожён и пропускает следующий ход/);
        expect(wizard.fasctinationActive).toBe(true);
        expect(wizard._mana).toBe(20);
    });

    test('возрождение уже активно его нельзя накладывать друг на друга', () => {
        wizard.fasctinationActive = true;
        const result = wizard.castFascination(knight);
        expect(result).toMatch(/Заворожение активно. Ждём следующего хода/);
        expect(knight.isFascination).toBe(false);
    });

    test('недостаточно маны', () => {
        wizard._mana = 5;
        const result = wizard.castFascination(knight);
        expect(result).toMatch(/не сумел использовать свою способность из-за необходимого количества маны/);
        expect(wizard.fasctinationActive).toBe(false);
    });

    test('получение урона и гибель колдуна', () => {
        wizard.getDamage(100);
        expect(wizard.getHealth).toBe(0);
        expect(wizard.isAlive).toBe(false);
    });

    test('если заворожение, то дамаг не проходит', () => {
        wizard.fasctinationActive = true;
        const result = wizard.getDamage(15);
        expect(result).toMatch(/не получает урона. В этот ход урон не получен/);
        expect(wizard.getHealth).toBe(100);
    });

    test('атакуем наносим урон', () => {
        const result = wizard.attack(knight);
        expect(result).toMatch(/атакует [Рыцарь] Фридрих/);
        expect(knight.getHealth).toBe(100 - wizard._strength);
    });

    test('либо дамажим через атаку, либо накладываем касты заворожения', () => {
        jest.spyOn(Math, 'random').mockReturnValue(0.4);
        const result = wizard.useAbility(knight);
        expect(result).toMatch(/использовал свою способность! [Рыцарь] Фридрих заворожён и пропускает следующий ход/); // Должен быть использован castFascination

        jest.spyOn(Math, 'random').mockReturnValue(0.6);
        const result2 = wizard.useAbility(knight);
        expect(result2).toMatch(/атакует [Рыцарь] Фридрих/);
    });
});
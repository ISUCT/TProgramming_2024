import { Archer } from '../../src/classes/laba3Archer';
import { Player } from '../../src/laba3CreatingPlayer';
import { Logs } from '../../src/laba3Logs';

jest.mock('./laba3Logs');

test('Ice Arrows core functionality', () => {
  const archer = new Archer('Толик', 20, 100);
  const target = new Player('Orc', 150, 25);
  
  // Проверка использования способности
  archer.setSelectedAbility('Ледяные стрелы');
  archer.useAbility(target, new Logs());
  archer.useAbility(target, new Logs());
  
  // Лимит использований и базовый урон
  expect(archer['iceArrowsUsed']).toBe(2);
  expect(target.getHealth()).toBe(150 - 20*2);

  // Проверка периодического урона
  Array.from({length: 3}).forEach((_, i) => {
    archer.applyAbilityEffects(target, new Logs());
    expect(target.getHealth()).toBe(150 - 40 - 3*(i+1));
  });

  // Сброс состояния
  archer.resetIceArrowsUsed();
  expect(archer['iceArrowsUsed'] + archer['iceArrowsDuration']).toBe(0);
});
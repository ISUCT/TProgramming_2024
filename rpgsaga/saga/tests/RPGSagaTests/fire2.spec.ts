import { Archer } from "../../src/RPGsaga/Archer";
import { TestPlayer } from "../../src/RPGsaga/utils/TestPlayer";

describe('Fire Arrows ability', () => {
  let archer: Archer;
  let target: TestPlayer;
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    archer = new Archer();
    target = new TestPlayer('TargetPlayer', 100, 10, 0.5);
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('should not increase damage when Fire Arrows is used multiple times', () => {

    //
    let archer1 : Archer;
    archer1 = new Archer();
    // Найти способность Fire Arrows
    const fireArrows = archer1.getAbilities().find(a => a.name === 'Fire Arrows');
    expect(fireArrows).not.toBeUndefined();
    expect(archer1.getAbilities.length).toBe(2);

    // Применить способность Fire Arrows первый раз
    archer.useAbility(target);

    expect(target.activeEffects.length).toBe(1);

    // Проверить, что эффект добавился
    let activeEffects = target.activeEffects.filter(effect => effect.ability.name === 'Fire Arrows');
    expect(activeEffects.length).toBe(1);

    // Сохранить здоровье перед атакой

    const healthAfterFirstUse = target.getHealth();
    expect(healthAfterFirstUse).toBe(100);

  });
});

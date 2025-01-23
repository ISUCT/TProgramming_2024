import { Mage } from "../../src/RPGsaga/Mage";
import { TestPlayer } from "../../src/RPGsaga/utils/TestPlayer";

describe('Mage', () => {
  let mage;
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    mage = new Mage();
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {}); 
  });

  afterEach(() => {
    consoleSpy.mockRestore(); 
  });

  test('should have SpellBounding ability', () => {
    const spellBounding = mage.getAbilities().find(a => a.name === 'SpellBounding');
    expect(spellBounding).not.toBeUndefined();
  });

  test('should use SpellBounding ability', () => {
    const target = new TestPlayer('TargetPlayer', 100, 10, 0.5);

    mage.useAbility(target);
    expect(consoleSpy).toHaveBeenCalled(); 

  });
});
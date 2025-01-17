import { Mage } from '../../sagaCode/heroClasses/mage'; 
import { Weapon } from '../../sagaCode/weapon'; 
import { Effect } from '../../sagaCode/effectOfDamage/effect'; 

describe('Mage Class', () => {
  let mage: Mage;
  let weapon: Weapon;
  let effect: Effect;

  beforeEach(() => {
    weapon = new Weapon('Staff', 15);
    mage = new Mage('TestMage', 80, weapon, 1);
    effect = new Effect('Fireball', 25, 3, mage);
  });

  test('Проверка файрбола', () => {
    const target = new Mage('Target', 100, weapon, 1);

    mage.useFireball(target, effect);

    expect(mage.activeEffect).toMatchObject({
        type: 'Fireball',
        damagePerTurn: 25,
        duration: 3,
      });
    expect(target.health).toBe(75); 
    expect(mage.statusEffect).toBe(0); 
  });

  test('Не должен использовать файрбол, т.к statusofeffect 0', () => {
    const target = new Mage('Target', 100, weapon, 1);

    const applyEffectSpy = jest.spyOn(effect, 'applyEffect')

    mage.statusOfEffect = 0;
    mage.useFireball(target, effect);

    expect(applyEffectSpy).not.toHaveBeenCalled();
    expect(target.health).toBe(100); // Здоровье не изменилось
  });
});
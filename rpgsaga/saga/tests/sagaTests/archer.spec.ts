import { Archer } from '../../sagaCode/heroClasses/archer'; 
import { Weapon } from '../../sagaCode/weapon';
import { Effect } from '../../sagaCode/effectOfDamage/effect'; 

describe('Archer Class', () => {
  let archer: Archer;
  let weapon: Weapon;
  let effect: Effect;

  beforeEach(() => {
    weapon = new Weapon('Bow', 12);
    archer = new Archer('TestArcher', 90, weapon, 1);
    effect = new Effect('Ледяная стрела', 10, 3, archer);
  });

  test('Должен использовать ледяную стрелу', () => {
    const target = new Archer('Target', 100, weapon, 1);
    archer.useArrowEffect(target, effect);
    expect(archer.activeEffect).toMatchObject({
        type: 'Ледяная стрела',
        damagePerTurn: 10,
        duration: 3,
      });
    expect(target.health).toBe(90); 
    expect(archer.statusEffect).toBe(0); 
  });

  test('Не должен использовать ледяную стрелу, т.к statusofeffect 0', () => {
    const target = new Archer('Target', 100, weapon, 1);

    archer.statusOfEffect = 0;

    archer.useArrowEffect(target, effect);

    expect(archer.activeEffect).toBeUndefined();
    expect(target.health).toBe(100); 
  });
});
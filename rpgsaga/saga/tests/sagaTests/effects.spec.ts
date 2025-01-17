import { Effect } from '../../sagaCode/effectOfDamage/effect'; 
import { Player } from '../../sagaCode/playerClass/player'; 
import { Archer } from '../../sagaCode/heroClasses/archer'; 
import { Weapon } from '../../sagaCode/weapon'; 

describe('Effect Class', () => {
  let effect: Effect;
  let player: Player;
  let weapon: Weapon;

  beforeEach(() => {
    weapon = new Weapon('Bow', 12);
    player = new Archer('TestPlayer', 100, weapon, 1);
    effect = new Effect('Poison', 5, 3, player);
  });

  test('Проверка применения эффекты ', () => {
    effect.applyEffect(player);
    expect(player.health).toBe(95);
    expect(effect.duration).toBe(2);
  });

  test('Не должен использовать эффект, т.к statusofeffect 0', () => {
    effect = new Effect('Poison', 5, 0, player);
    effect.applyEffect(player);
    expect(player.health).toBe(100); 
  });
});
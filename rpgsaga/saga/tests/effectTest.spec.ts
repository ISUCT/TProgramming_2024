import { StatusEffect } from '../src/rpg_saga/Mechanics/statusEffect';
import { Character } from '../src/rpg_saga/character'; 
import { ArcherArsenal } from '../src/rpg_saga/Weapon/weapon';
import { Archer } from '../src/rpg_saga/Classes/archer';


describe('Status Effect class', () => {
  let statusEffect: StatusEffect;
  let opponent: Archer
  let user: Character;

  beforeEach(() => {
    statusEffect = new StatusEffect('Test Name', 2, damageTic => damageTic.receiveDamage(5))
    opponent = new Archer('Opponent', ArcherArsenal[0]);
    user = new Archer('TestArcher', ArcherArsenal[0]);
  });

  test('should create an instance of StatusEffect with correct properties', () => {
    expect(statusEffect).toBeInstanceOf(StatusEffect);
    expect(statusEffect.effectName).toBe('Test Name');
    expect(statusEffect.effectDuration).toBe(2);
  });

  test('should apply damage to the player when the effect is applied', () => {
    opponent.addStatusEffect(statusEffect)
    expect(opponent.statusEffect[0]).toBeInstanceOf(StatusEffect);
    //expect(opponent.containStatusEffects).toBe(`Opponent находится под действием Test Name. Оставшееся количество ходов: 2`);
  });

  test('should reduce the duration of the effect', () => {
    statusEffect.reduceDuration();
    expect(statusEffect.effectDuration).toBe(1);
  });

  test('should check if the effect has expired', () => {
    expect(statusEffect.hasExpired()).toBe(false); 
    statusEffect.reduceDuration(); 
    statusEffect.reduceDuration(); 
    statusEffect.reduceDuration(); 
    expect(statusEffect.hasExpired()).toBe(true); 
  });

});

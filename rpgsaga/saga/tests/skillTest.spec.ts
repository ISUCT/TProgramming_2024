import { Character } from '../src/rpg_saga/character';
import { Archer } from '../src/rpg_saga/Classes/archer';
import { Sorcerer } from '../src/rpg_saga/Classes/sorcerer';
import { Skill } from '../src/rpg_saga/Mechanics/skill';
import { StatusEffect } from '../src/rpg_saga/Mechanics/statusEffect';
import { ArcherArsenal, Weapon } from '../src/rpg_saga/Weapon/weapon';

describe('Skill test', () => {
  let skill: Skill;
  let user: Character;
  let opponent: Sorcerer;
  const weapon = new Weapon('Stuff', 15);

  beforeEach(() => {
    skill = new Skill('Test', 1, (_, target) => {
      target.addStatusEffect(new StatusEffect('Test Effect', 2, test => test.receiveDamage(0)));
      return 'Test return';
    });
    opponent = new Sorcerer('Opponent', weapon);
    user = new Archer('TestArcher', ArcherArsenal[0]);
  });

  test('should create an instance of Skill with correct properties', () => {
    expect(skill).toBeInstanceOf(Skill);
    expect(skill.skillName).toBe('Test');
    expect(skill.amountOfUses).toBe(1);
    expect(skill.remainingUses).toBe(1);
  });

  test('should apply the skill and decrease remaining uses', () => {
    skill.applySkill(user, opponent);
    expect(skill.remainingUses).toBe(skill.amountOfUses - 1);
    expect(skill.applySkill(user, opponent)).toBe(
      `TestArcher пытается использовать Test, но у него закончилось количество применений.`,
    );
  });
});
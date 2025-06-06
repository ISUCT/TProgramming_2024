import { WarriorSkills } from "../src/rpg_saga/Mechanics/skills";
import { Warrior } from "../src/rpg_saga/Classes/warrior";
import { Weapon } from "../src/rpg_saga/Weapon/weapon";
import { StatusEffect } from "../src/rpg_saga/Mechanics/statusEffect";

describe('Warrior Class', () => {
    let warrior: Warrior;
    let opponent: Warrior;
    const weapon = new Weapon('Sword', 15); 
  
    beforeEach(() => {
      warrior = new Warrior('Test', weapon);
      opponent = new Warrior('Opponent', weapon)
    });
  
    test('should create an Warrior with a random health amount between 100 and 150', () => {
      expect(warrior).toBeInstanceOf(Warrior);
      expect(warrior.className).toBe('Warrior');
      expect(warrior.characterName).toBe('Test');
      expect(warrior.weapon).toBe(weapon);
      expect(warrior.healthPoints).toBeGreaterThanOrEqual(100);
      expect(warrior.healthPoints).toBeLessThanOrEqual(150);
    });
  
    test('should have WarriorSkills as skills', () => {
      expect(warrior.skills).toBe(WarriorSkills);
    });
    
    test('Should perform default attack correctly', () => {
        warrior.performAttack(opponent);
        expect(opponent.healthPoints).toBeCloseTo((opponent.healthAmount)-(weapon.damage));
      });
    test('Should perform Mastery correctly', () => {
            warrior.performSkill(warrior,opponent,WarriorSkills[1]);
            expect(opponent.healthPoints).toBeCloseTo((opponent.healthAmount)-(weapon.damage+10));
        })
    test('Should perform bleeding stike correctly', () => {
            warrior.performSkill(warrior,opponent,WarriorSkills[0]);
            expect(opponent.statusEffect[0]).toBeInstanceOf(StatusEffect);
            expect(opponent.statusEffect[0].effectName).toBe('Кровотечение');
        })  
  });
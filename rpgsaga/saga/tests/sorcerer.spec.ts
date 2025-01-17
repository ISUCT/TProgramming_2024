import { Sorcerer } from "../src/rpg_saga/Classes/sorcerer";
import { SorcererSkills } from "../src/rpg_saga/Mechanics/skills";
import { Weapon } from "../src/rpg_saga/Weapon/weapon";
import { StatusEffect } from "../src/rpg_saga/Mechanics/statusEffect";

describe('Sorcerer Class', () => {
    let archer: Sorcerer;
    let opponent: Sorcerer;
    const weapon = new Weapon('Stuff', 15); 
  
    beforeEach(() => {
      archer = new Sorcerer('Test', weapon);
      opponent = new Sorcerer('Opponent', weapon)
    });
  
    test('should create an Sorcerer with a random health amount between 50 and 100', () => {
      expect(archer).toBeInstanceOf(Sorcerer);
      expect(archer.className).toBe('Sorcerer');
      expect(archer.characterName).toBe('Test');
      expect(archer.weapon).toBe(weapon);
      expect(archer.healthPoints).toBeGreaterThanOrEqual(50);
      expect(archer.healthPoints).toBeLessThanOrEqual(100);
    });
  
    test('should have ArcherSkills as skills', () => {
      expect(archer.skills).toBe(SorcererSkills);
    });
    
    test('Should perform default attack correctly', () => {
        archer.performAttack(opponent);
        expect(opponent.healthPoints).toBeCloseTo((opponent.healthAmount)-(weapon.damage));
      });
    
    test('Should perform burning arrows correctly', () => {
        archer.performSkill(archer,opponent,SorcererSkills[0]);
        expect(opponent.statusEffect[0]).toBeInstanceOf(StatusEffect);
        expect(opponent.statusEffect[0].effectName).toBe('Горение');
    })

    test('Should perform frozen arrows correctly', () => {
        archer.performSkill(archer,opponent,SorcererSkills[1]);
        expect(opponent.statusEffect[0]).toBeInstanceOf(StatusEffect);
        expect(opponent.statusEffect[0].effectName).toBe('Обморожение');
    })
  });
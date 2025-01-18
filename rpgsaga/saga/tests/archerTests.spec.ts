import { Character } from "../src/rpg_saga/character";
import { Archer } from "../src/rpg_saga/Classes/archer";
import { ArcherSkills } from "../src/rpg_saga/Mechanics/skills";
import { Skill } from "../src/rpg_saga/Mechanics/skill";
import { StatusEffect } from "../src/rpg_saga/Mechanics/statusEffect";
import { ArcherArsenal, SorcererArsenal, WarriorArsenal } from "../src/rpg_saga/Weapon/weapon";
import { Weapon } from "../src/rpg_saga/Weapon/weapon";

describe('Archer Class', () => {
    let archer: Archer;
    let opponent: Archer;
    const weapon = new Weapon('Bow', 15); 
  
    beforeEach(() => {
      archer = new Archer('Test', weapon);
      opponent = new Archer('Opponent', weapon)
    });
  
    test('should create an Archer with a random health amount between 70 and 120', () => {
      expect(archer).toBeInstanceOf(Archer);
      expect(archer.className).toBe('Archer');
      expect(archer.characterName).toBe('Test');
      expect(archer.weapon).toBe(weapon);
      expect(archer.healthPoints).toBeGreaterThanOrEqual(70);
      expect(archer.healthPoints).toBeLessThanOrEqual(120);
    });
  
    test('should have ArcherSkills as skills', () => {
      expect(archer.skills).toBe(ArcherSkills);
    });
    
    test('Should perform default attack correctly', () => {
        archer.performAttack(opponent);
        expect(opponent.healthPoints).toBeCloseTo((opponent.healthAmount)-(weapon.damage));
      });
    
    test('Should perform burning arrows correctly', () => {
        archer.performSkill(archer,opponent,ArcherSkills[0]);
        expect(opponent.statusEffect[0]).toBeInstanceOf(StatusEffect);
        expect(opponent.statusEffect[0].effectName).toBe('Горение');
    })

    test('Should perform frozen arrows correctly', () => {
        archer.performSkill(archer,opponent,ArcherSkills[1]);
        expect(opponent.statusEffect[0]).toBeInstanceOf(StatusEffect);
        expect(opponent.statusEffect[0].effectName).toBe('Обморожение');
    })
  });
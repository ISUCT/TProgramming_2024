import { Archer } from "../../src/rpg saga/players/archerClass";
import { getArchers } from "../../src/rpg saga/players/someArchers";
import { getWarriors } from "../../src/rpg saga/players/someWarriors";
import { getWizards } from "../../src/rpg saga/players/someWizards";
import { Warrior } from "../../src/rpg saga/players/warriorClass";
import { Wizard } from "../../src/rpg saga/players/wizardClass";


describe('getArchers Function', () => {
  it('Should return an array of Archers', () => {
    const archers = getArchers(3);
    expect(Array.isArray(archers)).toBe(true);
    expect(archers.length).toBe(3);
    archers.forEach(archer => {
      expect(archer).toBeInstanceOf(Archer);
    });
  });
});
describe('getWarriors Function', () => {
    it('Should return an array of Warriors', () => {
      const warriors = getWarriors(3);
      expect(Array.isArray(warriors)).toBe(true);
      expect(warriors.length).toBe(3);
      warriors.forEach(warrior => {
        expect(warrior).toBeInstanceOf(Warrior);
      });
    });
  });

  describe('getWizards Function', () => {
    it('Should return an array of Wizards', () => {
      const wizards = getWizards(3);
      expect(Array.isArray(wizards)).toBe(true);
      expect(wizards.length).toBe(3);
      wizards.forEach(wizard => {
        expect(wizard).toBeInstanceOf(Wizard);
      });   
    });
  });
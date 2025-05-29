import { randomNumber } from "../../sagaCode/randomGenerator"; 
import { Knight } from "../../sagaCode/heroClasses/knight";
import { Archer } from "../../sagaCode/heroClasses/archer";
import { Mage } from "../../sagaCode/heroClasses/mage";
import { characterGenerator } from "../../sagaCode/randomGenerator";
import { Weapon } from "../../sagaCode/weapon";

describe('randomNumber Function', () => {
  test('Проверка вывода чисел в заданном диапазоне', () => {
    const min = 1;
    const max = 10;
    const result = randomNumber(min, max);
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
  });
});

describe('characterGenerator', () => {
    let generator: characterGenerator;
  
    beforeEach(() => {
      generator = new characterGenerator();
    });
  
    test('Проверка классов создания рандомного персонажа', () => {
      const player = generator.createRandomPlayer();

      expect(
        player instanceof Knight || player instanceof Archer || player instanceof Mage
      ).toBeTruthy();
    });

    test('Проверка создания 4 рандомных персонажей и их классов', () => {
        const players = generator.initializePlayers(4);
    
        expect(players.length).toBe(4); 
        players.forEach(player => {
          expect(
            player instanceof Knight || player instanceof Archer || player instanceof Mage
          ).toBeTruthy();
        });
      });
});
import { Player } from "../../src/rpg saga/players/playerClass";
import { Warrior } from "../../src/rpg saga/players/warriorClass";
import { Sword } from "../../src/rpg saga/weapons/swordClass";



describe('Warrior Class', () => {
  let warrior: Player;
  let opp: Player

  beforeEach(() => {
    warrior = new Warrior(true, false, [], [0, 0], 'Warrior', 'TestWarrior', 100, new Sword('TestSword','режущий', 15, 0.2), 20, 10, 5);
    opp = new Warrior(true, false, [], [0, 0], 'Mock', 'MockPlayer', 100, new Sword('MockSword','режущий', 10, 0.1), 10, 10, 10);
  }); 

  it('Should be an instance of Warrior', () => {
    expect(warrior).toBeInstanceOf(Warrior);
  });

  it('Should perform default attack correctly', () => {
    warrior['defaultAttack'](opp);
    expect(opp['_healthPoints']).toBeLessThan(100);
  });

  it('Should perform Blow of Justice correctly', () => {
    warrior['blowOfJustice'](opp);
    expect(opp['_healthPoints']).toBeLessThan(100);
  });

  it('Should attack with correct priority', () => {
    warrior.attack(opp);
    expect(opp['_healthPoints']).toBeLessThan(100);
  });

  it('Should handle silence correctly', () => {
    warrior['_silence'] = true;
    warrior.attack(opp);
    expect(warrior['_silence']).toBe(false);
  });
});
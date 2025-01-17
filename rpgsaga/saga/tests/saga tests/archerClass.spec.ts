import { Archer } from "../../src/rpg saga/players/archerClass";
import { Bow } from "../../src/rpg saga/weapons/bowClass";

describe('Archer Class', () => {
  let archer: Archer;
  let opponent: Archer;

  beforeEach(() => {
    archer = new Archer(true, false, [], [0, 0], 'Archer', 'TestArcher', 100, new Bow('TestBow', 'проникающий',  15, 0.2), 10, 20, 5);
    opponent = new Archer(true, false, [], [0, 0], 'Archer', 'OpponentArcher', 100, new Bow('TestBow','проникающий', 15, 0.2), 10, 20, 5);
  });

  it('Should be an instance of Archer', () => {
    expect(archer).toBeInstanceOf(Archer);
  });

  it('Should perform default attack correctly', () => {
    archer['defaultAttack'](opponent);
    expect(opponent['_healthPoints']).toBeLessThan(100);
  });

  it('Should perform Power Shot correctly', () => {
    archer['powerShot'](opponent);
    expect(opponent['_healthPoints']).toBeLessThan(100);
  });

  it('Should attack with correct priority', () => {
    archer.attack(opponent);
    expect(opponent['_healthPoints']).toBeLessThan(100);
  });

  it('Should handle silence correctly', () => {
    archer['_silence'] = true;
    archer.attack(opponent);
    expect(archer['_silence']).toBe(false);
  });
});
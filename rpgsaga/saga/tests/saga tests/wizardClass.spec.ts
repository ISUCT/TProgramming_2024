import { Wizard } from "../../src/rpg saga/players/wizardClass";
import { Wand } from "../../src/rpg saga/weapons/wandClass";


describe('Wizard Class', () => {
  let wizard: Wizard;
  let opponent: Wizard;

  beforeEach(() => {
    wizard = new Wizard(true, false, [], [0, 0], 'Wizard', 'TestWizard', 100, new Wand('TestWand','Магическое', 30, 0.3), 5, 10, 20);
    opponent = new Wizard(true, false, [], [0, 0], 'Wizard', 'TestArcher', 100, new Wand('TestWand2','Магическое', 15, 0.2), 10, 20, 5);
  });

  it('Should be an instance of Wizard', () => {
    expect(wizard).toBeInstanceOf(Wizard);
  });

  it('Should perform default attack correctly', () => {
    wizard['defaultAttack'](opponent);
    expect(opponent['_healthPoints']).toBeLessThan(100);
  });

  it('Should apply silence correctly', () => {
    wizard['hahaTrolled'](opponent);
    expect(opponent['_silence']).toBe(true);
  });

  it('Should attack with correct priority', () => {
    wizard.attack(opponent);
    expect(opponent['_healthPoints']).toBeLessThan(100);
  });

  it('Should handle silence correctly', () => {
    wizard['_silence'] = true;
    wizard.attack(opponent);
    expect(wizard['_silence']).toBe(false);
  });
});
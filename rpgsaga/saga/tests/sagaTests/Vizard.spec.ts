import { Vizard } from '../../src/classes/Vizard';

describe('Vizard class methods tests', () => {
  it('Constructor test', () => {
    let newVizard = new Vizard(75, 25, 'Ibragim');
    expect(newVizard.healthPoints).toEqual(75);
    expect(newVizard.strengthPoints).toBe(25);
    expect(newVizard.playerName).toBe('Ibragim');
  });
  describe('Get methods tests', () => {
    let newVizard = new Vizard(75, 25, 'Ibragim');
    it('Health get test', () => {
      expect(newVizard.healthPoints).toEqual(75);
    });
    it('Strength get test', () => {
      expect(newVizard.strengthPoints).toBe(25);
    });
    it('Name get test', () => {
      expect(newVizard.playerName).toBe('Ibragim');
    });
  });
  describe('Vizard methods tests', () => {
    let newVizard = new Vizard(75, 25, 'Ibragim');
    let opponent = new Vizard(86, 26, 'Mustafa');
    it('Should change the propertie "skillUsed" to true', () => {
      newVizard.useSkill(opponent);
      expect(newVizard.playerSkillUsed).toEqual(true);
    });
    it('Should return health after an attack', () => {
      newVizard.attack(opponent);
      expect(opponent.healthPoints).toEqual(86 - newVizard.strengthPoints);
    });
    it('Should change the propertie "skillUsed" to false', () => {
      newVizard.takeDamage(55);
      expect(newVizard.playerSkillUsed).toEqual(false);
    });
  });
  describe('Vizard methods tests', () => {
    let newVizard = new Vizard(75, 25, 'Ibragim');
    it('Health should decrease by the number of damage units', () => {
      newVizard.takeDamage(45);
      expect(newVizard.healthPoints).toEqual(75 - 45);
    });
    it('Ibragim should DIE.', () => {
      newVizard.takeDamage(45);
      expect(newVizard.isAlivePlayer).toEqual(false);
    });
  });
});

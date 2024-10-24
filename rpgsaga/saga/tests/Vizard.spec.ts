import { Vizard } from '../src/classes/Vizard';

describe('Vizard class methods tests', () => {
  it('Constructor test', () => {
    let newVizard = new Vizard(75, 25, 'Ibragim');
    expect(newVizard.hp).toEqual(75);
    expect(newVizard.sp).toBe(25);
    expect(newVizard.playerName).toBe('Ibragim');
  });
  describe('Get methods tests', () => {
    let newVizard = new Vizard(75, 25, 'Ibragim');
    it('Health get test', () => {
      expect(newVizard.hp).toEqual(75);
    });
    it('Strength get test', () => {
      expect(newVizard.sp).toBe(25);
    });
    it('Name get test', () => {
      expect(newVizard.playerName).toBe('Ibragim');
    });
  });
  describe('Set methods tests', () => {
    let newVizard = new Vizard(75, 25, 'Ibragim');
    it('Health basic test', () => {
      newVizard.hp = 35;
      expect(newVizard.hp).toEqual(35);
    });
    it('Health negative test', () => {
      expect(() => {
        newVizard.hp = -1;
      }).toThrow(Error('Недопустимый показатель здоровья'));
    });
    it('Strength basic test', () => {
      newVizard.sp = 86;
      expect(newVizard.sp).toEqual(86);
    });
    it('Strength negative test', () => {
      expect(() => {
        newVizard.sp = -1;
      }).toThrow(Error('Недопустимый показатель силы'));
    });
  });
  describe('Vizard methods tests', () => {
    let newVizard = new Vizard(75, 25, 'Ibragim');
    let opponent = new Vizard(86, 26, 'Mustafa');
    it('Should change the propertie "skillUsed" to true', () => {
      newVizard.useSkill(opponent);
      expect(newVizard.skillUsed).toEqual(true);
    });
    it('Should return health after an attack', () => {
      newVizard.attack(opponent);
      expect(opponent.hp).toEqual(86 - newVizard.sp);
    });
    it('Should change the propertie "skillUsed" to false', () => {
      newVizard.takeDamage(55);
      expect(newVizard.skillUsed).toEqual(false);
    });
  });
  describe('Vizard methods tests', () => {
    let newVizard = new Vizard(75, 25, 'Ibragim');
    it('Health should decrease by the number of damage units', () => {
      newVizard.takeDamage(45);
      expect(newVizard.hp).toEqual(75 - 45);
    });
    it('Ibragim should DIE.', () => {
      newVizard.takeDamage(45);
      expect(newVizard.isAlive).toEqual(false);
    });
  });
});

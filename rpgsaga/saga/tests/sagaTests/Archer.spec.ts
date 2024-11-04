import { Archer } from '../../src/classes/Archer';

describe('Archer class methods tests', () => {
  it('Constructor test', () => {
    let newArcher = new Archer(75, 25, 'Ibragim');
    expect(newArcher.healthPoints).toEqual(75);
    expect(newArcher.strengthPoints).toBe(25);
    expect(newArcher.playerName).toBe('Ibragim');
  });
  describe('Get methods tests', () => {
    let newArcher = new Archer(75, 25, 'Ibragim');
    it('Health get test', () => {
      expect(newArcher.healthPoints).toEqual(75);
    });
    it('Strength get test', () => {
      expect(newArcher.strengthPoints).toBe(25);
    });
    it('Name get test', () => {
      expect(newArcher.playerName).toBe('Ibragim');
    });
  });
  describe('Archer methods tests', () => {
    let newArcher = new Archer(75, 25, 'Ibragim');
    let opponent = new Archer(86, 26, 'Mustafa');
    it('Should change the propertie "skillUsed" to true', () => {
      newArcher.useSkill(opponent);
      expect(newArcher.playerSkillUsed).toEqual(true);
    });
  });
  describe('Archer methods tests', () => {
    let newArcher = new Archer(75, 25, 'Ibragim');
    let opponent = new Archer(86, 26, 'Mustafa');
    it('Should return health after an attack whithout using a skill', () => {
      newArcher.attack(opponent);
      expect(opponent.healthPoints).toEqual(86 - newArcher.strengthPoints);
    });
    it('Health should decrease by the number of damage units', () => {
      newArcher.takeDamage(45);
      expect(newArcher.healthPoints).toEqual(75 - 45);
    });
    it('Ibragim should DIE.', () => {
      newArcher.takeDamage(45);
      expect(newArcher.isAlivePlayer).toEqual(false);
    });
  });
});

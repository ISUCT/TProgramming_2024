import { Knight } from '../../src/classes/Knight';

describe('Knight class methods tests', () => {
  it('Constructor test', () => {
    let newKnight = new Knight(75, 25, 'Ibragim');
    expect(newKnight.healthPoints).toEqual(75);
    expect(newKnight.strengthPoints).toBe(25);
    expect(newKnight.playerName).toBe('Ibragim');
  });
  describe('Get methods tests', () => {
    let newKnight = new Knight(75, 25, 'Ibragim');
    it('Health get test', () => {
      expect(newKnight.healthPoints).toEqual(75);
    });
    it('Strength get test', () => {
      expect(newKnight.strengthPoints).toBe(25);
    });
    it('Name get test', () => {
      expect(newKnight.playerName).toBe('Ibragim');
    });
  });
  describe('Set methods tests', () => {
    let newKnight = new Knight(75, 25, 'Ibragim');
    it('Health basic test', () => {
      newKnight.healthPoints = 35;
      expect(newKnight.healthPoints).toEqual(35);
    });
    it('Health negative test', () => {
      expect(() => {
        newKnight.healthPoints = -1;
      }).toThrow(Error('Недопустимый показатель здоровья'));
    });
    it('Strength basic test', () => {
      newKnight.strengthPoints = 86;
      expect(newKnight.strengthPoints).toEqual(86);
    });
    it('Strength negative test', () => {
      expect(() => {
        newKnight.strengthPoints = -1;
      }).toThrow(Error('Недопустимый показатель силы'));
    });
  });
  describe('Knight methods tests', () => {
    let newKnight = new Knight(75, 25, 'Ibragim');
    let opponent = new Knight(86, 26, 'Mustafa');
    it('Should change the propertie "skillUsed" to true', () => {
      newKnight.useSkill(opponent);
      expect(newKnight.skillUsed).toEqual(true);
    });
    it('Should return health after using a skill', () => {
      expect(opponent.healthPoints).toEqual(86 - newKnight.strengthPoints * 1.3);
    });
    it('Should return health after an attack using a skill', () => {
      newKnight.attack(opponent);
      expect(opponent.healthPoints).toEqual(86 - (newKnight.strengthPoints * 1.3 + newKnight.strengthPoints));
    });
  });
  describe('Knight methods tests', () => {
    let newKnight = new Knight(75, 25, 'Ibragim');
    let opponent = new Knight(86, 26, 'Mustafa');
    it('Should return health after an attack whithout using a skill', () => {
      newKnight.attack(opponent);
      expect(opponent.healthPoints).toEqual(86 - newKnight.strengthPoints);
    });
    it('Health should decrease by the number of damage units', () => {
      newKnight.takeDamage(45);
      expect(newKnight.healthPoints).toEqual(75 - 45);
    });
    it('Ibragim should DIE.', () => {
      newKnight.takeDamage(45);
      expect(newKnight.isAlive).toEqual(false);
    });
  });
});

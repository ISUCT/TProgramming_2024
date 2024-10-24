import { Knight } from '../src/classes/Knight';

describe('Knight class methods tests', () => {
  it('Constructor test', () => {
    let newKnight = new Knight(75, 25, 'Ibragim');
    expect(newKnight.health).toEqual(75);
    expect(newKnight.strength).toBe(25);
    expect(newKnight.name).toBe('Ibragim');
  });
  describe('Get methods tests', () => {
    let newKnight = new Knight(75, 25, 'Ibragim');
    it('Health get test', () => {
      expect(newKnight.health).toEqual(75);
    });
    it('Strength get test', () => {
      expect(newKnight.strength).toBe(25);
    });
    it('Name get test', () => {
      expect(newKnight.name).toBe('Ibragim');
    });
  });
  describe('Set methods tests', () => {
    let newKnight = new Knight(75, 25, 'Ibragim');
    it('Health basic test', () => {
      newKnight.health = 35;
      expect(newKnight.health).toEqual(35);
    });
    it('Health negative test', () => {
      expect(() => {
        newKnight.health = -1;
      }).toThrow(Error('Недопустимый показатель здоровья'));
    });
    it('Strength basic test', () => {
      newKnight.strength = 86;
      expect(newKnight.strength).toEqual(86);
    });
    it('Strength negative test', () => {
      expect(() => {
        newKnight.strength = -1;
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
      expect(opponent.health).toEqual(86 - newKnight.strength * 1.3);
    });
    it('Should return health after an attack using a skill', () => {
      newKnight.attack(opponent);
      expect(opponent.health).toEqual(86 - (newKnight.strength * 1.3 + newKnight.strength));
    });
  });
  describe('Knight methods tests', () => {
    let newKnight = new Knight(75, 25, 'Ibragim');
    let opponent = new Knight(86, 26, 'Mustafa');
    it('Should return health after an attack whithout using a skill', () => {
      newKnight.attack(opponent);
      expect(opponent.health).toEqual(86 - newKnight.strength);
    });
    it('Health should decrease by the number of damage units', () => {
      newKnight.takeDamage(45);
      expect(newKnight.health).toEqual(75 - 45);
    });
    it('Ibragim should DIE.', () => {
      newKnight.takeDamage(45);
      expect(newKnight.isAlive).toEqual(false);
    });
  });
});

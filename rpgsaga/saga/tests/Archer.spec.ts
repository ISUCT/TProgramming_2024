import { Archer } from '../src/classes/Archer';

describe('Archer class methods tests', () => {
  it('Constructor test', () => {
    let newArcher = new Archer(75, 25, 'Ibragim');
    expect(newArcher.health).toEqual(75);
    expect(newArcher.strength).toBe(25);
    expect(newArcher.name).toBe('Ibragim');
  });
  describe('Get methods tests', () => {
    let newArcher = new Archer(75, 25, 'Ibragim');
    it('Health get test', () => {
      expect(newArcher.health).toEqual(75);
    });
    it('Strength get test', () => {
      expect(newArcher.strength).toBe(25);
    });
    it('Name get test', () => {
      expect(newArcher.name).toBe('Ibragim');
    });
  });
  describe('Set methods tests', () => {
    let newArcher = new Archer(75, 25, 'Ibragim');
    it('Health basic test', () => {
      newArcher.health = 35;
      expect(newArcher.health).toEqual(35);
    });
    it('Health negative test', () => {
      expect(() => {
        newArcher.health = -1;
      }).toThrow(Error('Недопустимый показатель здоровья'));
    });
    it('Strength basic test', () => {
      newArcher.strength = 86;
      expect(newArcher.strength).toEqual(86);
    });
    it('Strength negative test', () => {
      expect(() => {
        newArcher.strength = -1;
      }).toThrow(Error('Недопустимый показатель силы'));
    });
  });
  describe('Archer methods tests', () => {
    let newArcher = new Archer(75, 25, 'Ibragim');
    let opponent = new Archer(86, 26, 'Mustafa');
    it('Should change the propertie "skillUsed" to true', () => {
      newArcher.useSkill(opponent);
      expect(newArcher.skillUsed).toEqual(true);
    });
    it('Should return health after an attack using a skill', () => {
      newArcher.attack(opponent);
      expect(opponent.health).toEqual(86 - (newArcher.strength + 2));
    });
  });
  describe('Archer methods tests', () => {
    let newArcher = new Archer(75, 25, 'Ibragim');
    let opponent = new Archer(86, 26, 'Mustafa');
    it('Should return health after an attack whithout using a skill', () => {
      newArcher.attack(opponent);
      expect(opponent.health).toEqual(86 - newArcher.strength);
    });
    it('Health should decrease by the number of damage units', () => {
      newArcher.takeDamage(45);
      expect(newArcher.health).toEqual(75 - 45);
    });
    it('Ibragim should DIE.', () => {
      newArcher.takeDamage(45);
      expect(newArcher.isAlive).toEqual(false);
    });
  });
});

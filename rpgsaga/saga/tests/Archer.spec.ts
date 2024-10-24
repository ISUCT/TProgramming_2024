import { Archer } from '../src/classes/Archer';

describe('Archer class methods tests', () => {
  it('Constructor test', () => {
    let newArcher = new Archer(75, 25, 'Ibragim');
    expect(newArcher.hp).toEqual(75);
    expect(newArcher.sp).toBe(25);
    expect(newArcher.playerName).toBe('Ibragim');
  });
  describe('Get methods tests', () => {
    let newArcher = new Archer(75, 25, 'Ibragim');
    it('Health get test', () => {
      expect(newArcher.hp).toEqual(75);
    });
    it('Strength get test', () => {
      expect(newArcher.sp).toBe(25);
    });
    it('Name get test', () => {
      expect(newArcher.playerName).toBe('Ibragim');
    });
  });
  describe('Set methods tests', () => {
    let newArcher = new Archer(75, 25, 'Ibragim');
    it('Health basic test', () => {
      newArcher.hp = 35;
      expect(newArcher.hp).toEqual(35);
    });
    it('Health negative test', () => {
      expect(() => {
        newArcher.hp = -1;
      }).toThrow(Error('Недопустимый показатель здоровья'));
    });
    it('Strength basic test', () => {
      newArcher.sp = 86;
      expect(newArcher.sp).toEqual(86);
    });
    it('Strength negative test', () => {
      expect(() => {
        newArcher.sp = -1;
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
      expect(opponent.hp).toEqual(86 - (newArcher.sp + 2));
    });
  });
  describe('Archer methods tests', () => {
    let newArcher = new Archer(75, 25, 'Ibragim');
    let opponent = new Archer(86, 26, 'Mustafa');
    it('Should return health after an attack whithout using a skill', () => {
      newArcher.attack(opponent);
      expect(opponent.hp).toEqual(86 - newArcher.sp);
    });
    it('Health should decrease by the number of damage units', () => {
      newArcher.takeDamage(45);
      expect(newArcher.hp).toEqual(75 - 45);
    });
    it('Ibragim should DIE.', () => {
      newArcher.takeDamage(45);
      expect(newArcher.isAlive).toEqual(false);
    });
  });
});

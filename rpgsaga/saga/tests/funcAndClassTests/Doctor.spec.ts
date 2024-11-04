import { Doctor } from '../../src/funcAndClasses/classes/workers/Doctor';

describe('Person class methods tests', () => {
  it('Constructor test', () => {
    let newDoctor = new Doctor('Mary', 25, 'Female', 'LidEnf', 25000);
    expect(newDoctor.age).toEqual(25);
    expect(newDoctor.name).toBe('Mary');
    expect(newDoctor.sex).toBe('female');
    expect(newDoctor.work).toBe('LidEnf');
    expect(newDoctor.salary).toEqual(25000);
  });
  describe('Get methods tests', () => {
    let newDoctor = new Doctor('Mary', 25, 'Female', 'LidEnf', 25000);
    it('Age get test', () => {
      expect(newDoctor.age).toEqual(25);
    });
    it('Name get test', () => {
      expect(newDoctor.name).toBe('Mary');
    });
    it('Sex get test', () => {
      expect(newDoctor.sex).toBe('female');
    });
    it('Work get test', () => {
      expect(newDoctor.work).toBe('LidEnf');
    });
    it('Salary get test', () => {
      expect(newDoctor.salary).toEqual(25000);
    });
  });
  describe('Set methods tests', () => {
    let newDoctor = new Doctor('Mary', 25, 'Female', 'LidEnf', 25000);
    it('Age basic test', () => {
      newDoctor.age = 35;
      expect(newDoctor.age).toEqual(35);
    });
    it('Age negative test', () => {
      expect(() => {
        newDoctor.age = -1;
      }).toThrow(Error('Недопустимый возраст'));
    });
    it('Name test', () => {
      newDoctor.name = 'Jess';
      expect(newDoctor.name).toBe('Jess');
    });
    it('Sex basic test', () => {
      newDoctor.sex = 'Male';
      expect(newDoctor.sex).toBe('male');
    });
    it('Sex uncorrect test', () => {
      expect(() => {
        newDoctor.sex = 'dog';
      }).toThrow(Error('Недопустимый гендер'));
    });
    it('Salary basic test', () => {
      newDoctor.salary = 35000;
      expect(newDoctor.salary).toEqual(35000);
    });
    it('Salary uncorrect test', () => {
      expect(() => {
        newDoctor.salary = -1;
      }).toThrow(Error('Недопустимая зарплата'));
    });
    it('Work test', () => {
      newDoctor.work = 'Kranex';
      expect(newDoctor.work).toBe('Kranex');
    });
  });
  describe('Other methods tests', () => {
    let newDoctor = new Doctor('Mary', 25, 'Female', 'LidEnf', 25000);
    it('Should return name, sex and work', () => {
      expect(newDoctor.toString()).toEqual(`${newDoctor.name} ${newDoctor.sex} ${newDoctor.work}`);
    });
    it('Should return age as number', () => {
      expect(newDoctor.toNumber()).toEqual(newDoctor.age);
    });
    it('Should return all properties', () => {
      expect(newDoctor.print()).toEqual(`name: ${newDoctor.name}\nsex: ${newDoctor.sex}\nage: ${newDoctor.age}`);
    });
    it('Should return work', () => {
      expect(newDoctor.workRespons()).toEqual(`${newDoctor.name} heals people`);
    });
  });
});

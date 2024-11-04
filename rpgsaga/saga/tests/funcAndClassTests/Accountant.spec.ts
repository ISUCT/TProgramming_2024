import { Accountant } from '../../src/funcAndClasses/classes/workers/Accountant';

describe('Person class methods tests', () => {
  it('Constructor test', () => {
    let newAccountant = new Accountant('TestPerson', 20, 'Male', 'Sberbank', 40000);
    expect(newAccountant.age).toEqual(20);
    expect(newAccountant.name).toBe('TestPerson');
    expect(newAccountant.sex).toBe('male');
    expect(newAccountant.work).toBe('Sberbank');
    expect(newAccountant.salary).toEqual(40000);
  });
  describe('Get methods tests', () => {
    let newAccountant = new Accountant('TestPerson', 20, 'Male', 'Sberbank', 40000);
    it('Age get test', () => {
      expect(newAccountant.age).toEqual(20);
    });
    it('Name get test', () => {
      expect(newAccountant.name).toBe('TestPerson');
    });
    it('Sex get test', () => {
      expect(newAccountant.sex).toBe('male');
    });
    it('Work get test', () => {
      expect(newAccountant.work).toBe('Sberbank');
    });
    it('Salary get test', () => {
      expect(newAccountant.salary).toEqual(40000);
    });
  });
  describe('Set methods tests', () => {
    let newAccountant = new Accountant('TestPerson', 20, 'Male', 'Sberbank', 40000);
    it('Age basic test', () => {
      newAccountant.age = 35;
      expect(newAccountant.age).toEqual(35);
    });
    it('Age negative test', () => {
      expect(() => {
        newAccountant.age = -1;
      }).toThrow(Error('Недопустимый возраст'));
    });
    it('Name test', () => {
      newAccountant.name = 'John';
      expect(newAccountant.name).toBe('John');
    });
    it('Sex basic test', () => {
      newAccountant.sex = 'Female';
      expect(newAccountant.sex).toBe('female');
    });
    it('Sex uncorrect test', () => {
      expect(() => {
        newAccountant.sex = 'dog';
      }).toThrow(Error('Недопустимый гендер'));
    });
    it('Salary basic test', () => {
      newAccountant.salary = 35000;
      expect(newAccountant.salary).toEqual(35000);
    });
    it('Salary uncorrect test', () => {
      expect(() => {
        newAccountant.salary = -1;
      }).toThrow(Error('Недопустимая зарплата'));
    });
    it('Work test', () => {
      newAccountant.work = 'AlphaBank';
      expect(newAccountant.work).toBe('AlphaBank');
    });
  });
  describe('Other methods tests', () => {
    let newAccountant = new Accountant('John', 20, 'Male', 'Sberbank', 40000);
    it('Should return name, sex and work', () => {
      expect(newAccountant.toString()).toEqual(`${newAccountant.name} ${newAccountant.sex} ${newAccountant.work}`);
    });
    it('Should return age as number', () => {
      expect(newAccountant.toNumber()).toEqual(newAccountant.age);
    });
    it('Should return all properties', () => {
      expect(newAccountant.print()).toEqual(
        `name: ${newAccountant.name}\nsex: ${newAccountant.sex}\nage: ${newAccountant.age}`,
      );
    });
    it('Should return work', () => {
      expect(newAccountant.workRespons()).toEqual(`${newAccountant.name} does paperwork`);
    });
  });
});

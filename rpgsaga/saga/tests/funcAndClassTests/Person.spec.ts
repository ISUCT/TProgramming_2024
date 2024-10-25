import { Person } from '../../src/funcAndClass/person';

describe('Person class methods tests', () => {
  it('Constructor test', () => {
    let newPerson = new Person('TestPerson', 20, 'Male');
    expect(newPerson.age).toEqual(20);
    expect(newPerson.name).toBe('TestPerson');
    expect(newPerson.sex).toBe('male');
  });
  describe('Get methods tests', () => {
    let newPerson = new Person('TestPerson', 20, 'Male');
    it('Age get test', () => {
      expect(newPerson.age).toEqual(20);
    });
    it('Name get test', () => {
      expect(newPerson.name).toBe('TestPerson');
    });
    it('Sex get test', () => {
      expect(newPerson.sex).toBe('male');
    });
  });
  describe('Set methods tests', () => {
    let newPerson = new Person('TestPerson', 20, 'Male');
    it('Age basic test', () => {
      newPerson.age = 35;
      expect(newPerson.age).toEqual(35);
    });
    it('Age negative test', () => {
      expect(() => {
        newPerson.age = -1;
      }).toThrow(Error('Недопустимый возраст'));
    });
    it('Name test', () => {
      newPerson.name = 'John';
      expect(newPerson.name).toBe('John');
    });
    it('Sex basic test', () => {
      newPerson.sex = 'Female';
      expect(newPerson.sex).toBe('female');
    });
    it('Sex uncorrect test', () => {
      expect(() => {
        newPerson.sex = 'dog';
      }).toThrow(Error('Недопустимый гендер'));
    });
  });
  describe('Other methods tests', () => {
    let newPerson = new Person('John', 20, 'Male');
    it('Should return name and sex', () => {
      expect(newPerson.toString()).toEqual(`${newPerson.name} ${newPerson.sex}`);
    });
    it('Should return age as number', () => {
      expect(newPerson.toNumber()).toEqual(newPerson.age);
    });
    it('Should return all properties', () => {
      expect(newPerson.print()).toEqual(`first name: ${newPerson.name}\nsex: ${newPerson.sex}\nage: ${newPerson.age}`);
    });
  });
});

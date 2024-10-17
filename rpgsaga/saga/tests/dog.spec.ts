import { Dog } from '../src/dog';

describe('Dog class methods tests', () => {
  it('Constuctor test', () => {
    let newDog = new Dog('TestDog', 'Retriever', 10);
    expect(newDog.name == 'TestDog');
    expect(newDog.breed == 'Retriever');
    expect(newDog.age == 10);
  });
  describe('Get methods tests', () => {
    let newDog = new Dog('TestDog', 'Retriever', 20);

    it('Age get test', () => {
      expect(newDog.age).toBe(20);
    });

    it('Name get test', () => {
      expect(newDog.name).toBe('TestDog');
    });

    it('Breed get test', () => {
      expect(newDog.breed).toBe('Retriever');
    });
  });
  describe('Set methods tests', () => {
    let newDog = new Dog('TestDog', 'Retriever', 10);

    it('Age basic test', () => {
      newDog.age = 15;
      expect(newDog.age).toBe(15);
    });

    it('Age negative test', () => {
      expect(() => {
        newDog.age = -1;
      }).toThrow(Error('Недопустимый возраст'));
    });

    it('Name test', () => {
      newDog.name = 'Ashley';
      expect(newDog.name).toBe('Ashley');
    });

    it('Breed basic test', () => {
      newDog.breed = 'Dachshund';
      expect(newDog.breed).toBe('Dachshund');
    });

    it('Breed uncorrect test', () => {
      expect(() => {
        newDog.breed = 'bird';
      }).toThrow(Error('Некорректная порода'));
    });
  });
  describe('Other methods tests', () => {
    let newDog = new Dog('TestDog', 'Retriever', 10);
    it('Should return name and breed', () => {
      expect(newDog.toString() == `${newDog.name} ${newDog.breed}`);
    });

    it('Should return age as a number', () => {
      expect(newDog.toNumber() == newDog.age);
    });

    it('Should return all propeties', () => {
      expect(newDog.print() == `name : ${newDog.name}\nbreed: ${newDog.breed}\nage: ${newDog.age}`);
    });
  });
});

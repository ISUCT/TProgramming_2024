import { Animal } from '../src/AbstractClass/AnimalAbstractClass';
import { Cat } from '../src/AbstractClass/CatClass';
import { Dog } from '../src/AbstractClass/DogClass';
import { Male } from '../src/AbstractClass/AnimalAbstractClass';

class TestAnimal extends Animal {
  makeSound(): string {
    return 'Test sound';
  }
}

describe('Animal, Cat, and Dog classes', () => {
  describe('Animal', () => {
    let animal: Animal;

    beforeEach(() => {
      animal = new TestAnimal('TestName', 5, 'female');
    });

    it('should set name, age, and gender correctly', () => {
      expect(animal.name).toBe('TestName');
      expect(animal.age).toBe(5);
      expect(animal.gender).toBe('female');
    });

    it('should throw an error if age is set to a negative value', () => {
      expect(() => {
        animal.age = -1;
      }).toThrow('Invalid age');
    });

    it('should return a correct toString output', () => {
      expect(animal.toString()).toBe('Animal: TestName, Age: 5, Gender: female');
    });
  });

  describe('Cat', () => {
    let cat: Cat;

    beforeEach(() => {
      cat = new Cat('Whiskers', 2, 'female', Male.woman);
    });

    it("should return 'Meow' when makeSound is called", () => {
      expect(cat.makeSound()).toBe('Meow');
    });

    it('should set male property correctly', () => {
      expect(cat.male).toBe(Male.woman);
    });

    it('should throw an error if an invalid male value is set', () => {
      expect(() => {
        cat.male = 'invalid' as Male;
      }).toThrow('Invalid male value');
    });

    it('should return correct toString output', () => {
      expect(cat.toString()).toBe('Cat: Whiskers, Age: 2, Gender: female, Male: woman');
    });
  });

  describe('Dog', () => {
    let dog: Dog;

    beforeEach(() => {
      dog = new Dog('Buddy', 3, 'male', Male.man);
    });

    it("should return 'Woof' when makeSound is called", () => {
      expect(dog.makeSound()).toBe('Woof');
    });

    it('should set male property correctly', () => {
      expect(dog.male).toBe(Male.man);
    });

    it('should throw an error if an invalid male value is set', () => {
      expect(() => {
        dog.male = 'invalid' as Male;
      }).toThrow('Invalid male value');
    });

    it('should return correct toString output', () => {
      expect(dog.toString()).toBe('Dog: Buddy, Age: 3, Gender: male, Male: man');
    });
  });
});

import { Cat, Dog, Animal } from '../src/AbstractClass/AnimalAbstractClass';

describe('Animal Class Hierarchy', () => {
  describe('Cat Class', () => {
    it('should instantiate a Cat object and return the correct values', () => {
      const cat = new Cat("Whiskers", 2, "female", "woman");
      expect(cat.name).toBe("Whiskers");
      expect(cat.age).toBe(2);
      expect(cat.gender).toBe("female");
      expect(cat.male).toBe("woman");
    });

    it('should throw an error when setting an invalid age for Cat', () => {
      const cat = new Cat("Whiskers", 2, "female", "woman");
      expect(() => cat.age = -1).toThrowError("Invalid age");
    });

    it('should throw an error when setting an invalid male value for Cat', () => {
      const cat = new Cat("Whiskers", 2, "female", "woman");
      expect(() => cat.male = "other").toThrowError("Invalid male");
    });

    it('should return the correct sound for a Cat', () => {
      const cat = new Cat("Whiskers", 2, "female", "woman");
      expect(cat.makeSound()).toBe("Meow");
    });

    it('should return the correct string representation for Cat', () => {
      const cat = new Cat("Whiskers", 2, "female", "woman");
      expect(cat.toString()).toBe("Cat: Whiskers, Age: 2, Gender: female, Male: woman");
    });
  });

  describe('Dog Class', () => {
    it('should instantiate a Dog object and return the correct values', () => {
      const dog = new Dog("Buddy", 3, "male", "man");
      expect(dog.name).toBe("Buddy");
      expect(dog.age).toBe(3);
      expect(dog.gender).toBe("male");
      expect(dog.male).toBe("man");
    });

    it('should throw an error when setting an invalid age for Dog', () => {
      const dog = new Dog("Buddy", 3, "male", "man");
      expect(() => dog.age = -1).toThrowError("Invalid age");
    });

    it('should throw an error when setting an invalid male value for Dog', () => {
      const dog = new Dog("Buddy", 3, "male", "man");
      expect(() => dog.male = "other").toThrowError("Invalid male");
    });

    it('should return the correct sound for a Dog', () => {
      const dog = new Dog("Buddy", 3, "male", "man");
      expect(dog.makeSound()).toBe("Woof");
    });

    it('should return the correct string representation for Dog', () => {
      const dog = new Dog("Buddy", 3, "male", "man");
      expect(dog.toString()).toBe("Dog: Buddy, Age: 3, Gender: male, Male: man");
    });
  });

  describe('Polymorphism with Animal Array', () => {
    it('should call makeSound and toString on each Animal subclass instance', () => {
      const animals: Animal[] = [
        new Cat("Whiskers", 2, "female", "woman"),
        new Dog("Buddy", 3, "male", "man")
      ];

      animals.forEach((animal) => {
        expect(typeof animal.makeSound()).toBe("string");
        expect(animal.toString()).toContain(animal instanceof Cat ? "Cat" : "Dog");
      });
    });
  });
});

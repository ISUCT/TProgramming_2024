import { Dog } from "../src/polymorphism/Dog";


describe('Dog', () => {
  let dog: Dog;

  beforeEach(() => {
    dog = new Dog('Sharik', 5, 'German Shepherd', 'Brown');
  });

  it('should create a new dog instance', () => {
    expect(dog).toBeDefined();
    expect(dog.getName).toBe('Sharik');
    expect(dog.getAge).toBe(5);
    expect(dog.getBreed).toBe('German Shepherd');
    expect(dog.getColor).toBe('Brown');
  });

  it('should change the dog name', () => {
    dog.changeName('Rex');
    expect(dog.getName).toBe('Rex');
  });

  it('should throw an error when setting an invalid age', () => {
    expect(() => {
      dog.setAge = -1;
    }).toThrowError('The value specified is incorrect for the age!');
  });

  it('should return the correct eating message', () => {
    expect(dog.eat()).toBe('Sharik likes to eat bones and meat');
  });

  it('should return the correct full information', () => {
    expect(dog.getFullInfo()).toBe('Dog name: Sharik, his age is 5 and his breed is German Shepherd');
  });

  it('should return the correct dog sound', () => {
    expect(dog.makeSound()).toBe('Woof, woof');
  });

  it('should set the color correctly', () => {
    dog.setColor = 'Brown';
    expect(dog.getColor).toBe('Brown');
  });

  it('should throw an error when setting an invalid color', () => {
    expect(() => {
      dog.setColor = '';
    }).toThrowError('You have not filled in the coloring field!');
  });
});

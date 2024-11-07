import { Cat } from './Cat';

describe('Cat', () => {
  let cat: Cat;

  beforeEach(() => {
    cat = new Cat('Marsik', 2, 'Siamese', 'Russia');
  });

  it('should create a new cat instance', () => {
    expect(cat).toBeDefined();
    expect(cat.getName).toBe('Marsik');
    expect(cat.getAge).toBe(2);
    expect(cat.getBreed).toBe('Siamese');
    expect(cat.getMotherland).toBe('Russia');
  });

  it('should change the cat name', () => {
    cat.changeName('Pushok');
    expect(cat.getName).toBe('Pushok');
  });

  it('should throw an error when setting an invalid age', () => {
    expect(() => {
      cat.setAge = -1;
    }).toThrowError('The value specified is incorrect for the age!');
  });

  it('should return the correct eating message', () => {
    expect(cat.eat()).toBe('Marsik likes to eat fish and mice');
  });

  it('should return the correct full information', () => {
    expect(cat.getFullInfo()).toBe('Cat name: Marsik, his age is 2 and his breed is Siamese');
  });

  it('should return the correct cat sound', () => {
    expect(cat.makeSound()).toBe('Meow, meow');
  });

  it('should set the motherland correctly', () => {
    cat.setMotherland = 'Russia';
    expect(cat.getMotherland).toBe('Russia');
  });

  it('should throw an error when setting an invalid motherland', () => {
    expect(() => {
      cat.setMotherland = '';
    }).toThrowError('You have not filled in the motherland field!');
  });
});
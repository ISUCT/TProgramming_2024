import { BlackPersian } from '../BlackPersian';
import { RedPersian } from '../RedPersian';
// import { Cat } from '../src/cat';

describe('Cat methods', () => {
  test('should set age correctly within range', () => {
    const cat = new BlackPersian('Milka', 1, 1);
    cat.age = 10;
    expect(cat.age).toBe(10);
  });

  test('should throw error when setting age below 0', () => {
    const cat = new BlackPersian('Milka', 1, 1);
    expect(() => {
      cat.age = -5;
    }).toThrow('age out of range');
  });

  test('should throw error when setting age above 30', () => {
    const cat = new BlackPersian('Milka', 1, 1);
    expect(() => {
      cat.age = 35;
    }).toThrow('age out of range');
  });

  test('should not generate an error when calling the bite() function', () => {
    const cat = new RedPersian('Milka', 1, 1);
    expect(() => cat.bite()).not.toThrow();
  });
});

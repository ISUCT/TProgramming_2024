import { Fox, Colors } from '../src/fox';

describe('Fox class methods tests', () => {
  it('Constructor test', () => {
    let newFox = new Fox('Foxy', 5, Colors.Red);  
    expect(newFox.getAge()).toBe(5);
    expect(newFox.getName()).toBe('Foxy');
    expect(newFox.getColor()).toBe(Colors.Red);
  });

describe('Get methods tests', () => {
    let newFox = new Fox('Foxy', 5, Colors.Red);
    it('Age get test', () => {
      expect(newFox.getAge()).toBe(5);
    });
    it('Name get test', () => {
      expect(newFox.getName()).toBe('Foxy');
    });
    it('Color get test', () => {
      expect(newFox.getColor()).toBe(Colors.Red);
    });
  });

describe('Set methods tests', () => {
    let newFox = new Fox('Foxy', 5, Colors.Red);
    
    it('Age basic test', () => {
      const ageError = newFox.setAge(10);
      expect(ageError).toBeNull();
      expect(newFox.getAge()).toBe(10);
    });

    it('Age negative test', () => {
      const ageError = newFox.setAge(-1);
      expect(ageError).toBeInstanceOf(Error);
      expect(ageError?.message).toBe("foxes don't live so long");
    });

    it('Age too large test', () => {
      const ageError = newFox.setAge(35);
      expect(ageError).toBeInstanceOf(Error);
      expect(ageError?.message).toBe("foxes don't live so long");
    });

    it('Color valid test', () => {
      const colorError = newFox.setColor(Colors.White);
      expect(colorError).toBeNull();
      expect(newFox.getColor()).toBe(Colors.White);
    });

    it('Color invalid test', () => {
      const colorError = newFox.setColor("blue" as Colors);
      expect(colorError).toBeInstanceOf(Error);
      expect(colorError?.message).toBe("foxes don't have such color");
    });
  });

describe('Other methods tests', () => {
    let newFox = new Fox('Foxy', 5, Colors.Red);

    it('Should return ASCII view', () => {
      const view = newFox.getView();
      expect(view).toContain('/\\   /\\');
      expect(view).toContain(' //\\\\_//\\\\');
    });
  });
});

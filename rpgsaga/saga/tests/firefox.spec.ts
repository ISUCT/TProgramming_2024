import { Firefox, Colors } from '../src/classes/foxes/firefox';

describe('Fox class funcs tests', () => {
  it('Constructor test', () => {
    let newFirefox = new Firefox('Browser', 5, Colors.Red, 60, 'Panda');
    expect(newFirefox.age).toEqual(5);
    expect(newFirefox.name).toBe('Browser');
    expect(newFirefox.color).toBe(Colors.Red);
    expect(newFirefox.lenght).toBe(60);
    expect(newFirefox.ancestor).toBe('Panda');
  });

  describe('Get funcs tests', () => {
    let newFirefox = new Firefox('Browser', 5, Colors.Red, 60, 'Panda');
    it('Age get test', () => {
      expect(newFirefox.age).toEqual(5);
    });
    it('Name get test', () => {
      expect(newFirefox.name).toBe('Browser');
    });
    it('Color get test', () => {
      expect(newFirefox.color).toBe(Colors.Red);
    });
    it('Ancestor get test', () => {
      expect(newFirefox.ancestor).toBe('Panda');
    });
    it('Lenght get test', () => {
      expect(newFirefox.lenght).toEqual(60);
    });
  });

  describe('Set funcs tests', () => {
    let newFirefox = new Firefox('Browser', 5, Colors.Red, 60, 'Panda');

    it('Age valid test', () => {
      newFirefox.age = 22;
      expect(newFirefox.age).toEqual(22);
    });

    it('Age negative test', () => {
      expect(() => { newFirefox.age = -1}).toThrow(Error("foxes dont live so long"));
    });
    
    it('Age too large test', () => {
      expect(() => { newFirefox.age = 1000}).toThrow(Error("foxes dont live so long"));
    });

    it('Color valid test', () => {
      newFirefox.color = Colors.White;
      expect(newFirefox.color).toBe(Colors.White);
    });

    it('Color invalid test', () => {
      expect(() => { newFirefox.color = "blue" as Colors}).toThrow(Error("foxes dont have such color"));
    });

    it('Name valid test', () => {
      newFirefox.name = "Joshua";
      expect(newFirefox.name).toBe("Joshua");
    });

    it('Name invalid test', () => {
      expect(() => { newFirefox.name = ""}).toThrow(Error("foxes names cannot be empty"));
    });

    it('Lenght valid test', () => {
      newFirefox.lenght = 66;
      expect(newFirefox.lenght).toEqual(66);
    });

    it('Lenght negative test', () => {
      expect(() => { newFirefox.lenght = -1}).toThrow(Error("FireFoxes can't be this long"));
    });
    
    it('Lenght too large test', () => {
      expect(() => { newFirefox.lenght = 1000}).toThrow(Error("FireFoxes can't be this long"));
    });

    it('Ancestor valid test', () => {
      newFirefox.ancestor = "Cat";
      expect(newFirefox.ancestor).toBe("Cat");
    });

    it('Ancestor invalid test', () => {
      expect(() => { newFirefox.ancestor = ""}).toThrow(Error("There can't be no ancestor"));
    });
  });
    describe('Other funcs tests', () => {
      let newFirefox = new Firefox('Browser', 5, Colors.Red, 60, 'Panda');
    it('Should return name, age and color', () => {
      expect(newFirefox.toString()).toEqual(`${newFirefox.name} ${newFirefox.color}`);
    });
    it('Should return age as number', () => {
      expect(newFirefox.toNumber()).toEqual(newFirefox.age);
    });
    it('Should return all of the properties', () => {
      expect(newFirefox.wholeFox()).toEqual(
        `Name: ${newFirefox.name} \n Age: ${newFirefox.age} \n Color: ${newFirefox.color} \n Lenght: ${newFirefox.lenght} \n Ancestor: ${newFirefox.ancestor}`,
      );
    });
    it('Should return interesting fact', () => {
      expect(newFirefox.intFact()).toEqual(`${newFirefox.name} is known to be face of web browser`);
    });
  });
});

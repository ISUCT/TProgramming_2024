import { Fennec, Colors } from '../src/classes/foxes/fennec';

describe('Fox class funcs tests', () => {
  it('Constructor test', () => {
    let newFennec = new Fennec('LittleFen', 5, Colors.White, 30, 'Fox');
    expect(newFennec.age).toEqual(5);
    expect(newFennec.name).toBe('LittleFen');
    expect(newFennec.color).toBe(Colors.White);
    expect(newFennec.lenght).toBe(30);
    expect(newFennec.ancestor).toBe('Fox');
  });

  describe('Get funcs tests', () => {
    let newFennec = new Fennec('LittleFen', 5, Colors.White, 30, 'Fox');
    it('Age get test', () => {
      expect(newFennec.age).toEqual(5);
    });
    it('Name get test', () => {
      expect(newFennec.name).toBe('LittleFen');
    });
    it('Color get test', () => {
      expect(newFennec.color).toBe(Colors.White);
    });
    it('Ancestor get test', () => {
      expect(newFennec.ancestor).toBe('Fox');
    });
    it('Lenght get test', () => {
      expect(newFennec.lenght).toEqual(30);
    });
  });

  describe('Set funcs tests', () => {
    let newFennec = new Fennec('LittleFen', 5, Colors.White, 30, 'Fox');

    it('Age valid test', () => {
      newFennec.age = 22;
      expect(newFennec.age).toEqual(22);
    });

    it('Age negative test', () => {
      expect(() => { newFennec.age = -1}).toThrow(Error("foxes dont live so long"));
    });
    
    it('Age too large test', () => {
      expect(() => { newFennec.age = 1000}).toThrow(Error("foxes dont live so long"));
    });

    it('Color valid test', () => {
      newFennec.color = Colors.White;
      expect(newFennec.color).toBe(Colors.White);
    });

    it('Color invalid test', () => {
      expect(() => { newFennec.color = "blue" as Colors}).toThrow(Error("foxes dont have such color"));
    });

    it('Name valid test', () => {
      newFennec.name = "Joshua";
      expect(newFennec.name).toBe("Joshua");
    });

    it('Name invalid test', () => {
      expect(() => { newFennec.name = ""}).toThrow(Error("foxes names cannot be empty"));
    });

    it('Lenght valid test', () => {
      newFennec.lenght = 22;
      expect(newFennec.lenght).toEqual(22);
    });

    it('Lenght negative test', () => {
      expect(() => { newFennec.lenght = -1}).toThrow(Error("Fennec can't be this long"));
    });
    
    it('Lenght too large test', () => {
      expect(() => { newFennec.lenght = 1000}).toThrow(Error("Fennec can't be this long"));
    });

    it('Ancestor valid test', () => {
      newFennec.ancestor = "Dog";
      expect(newFennec.ancestor).toBe("Dog");
    });

    it('Ancestor invalid test', () => {
      expect(() => { newFennec.ancestor = ""}).toThrow(Error("There can't be no ancestor"));
    });
  });
    describe('Other funcs tests', () => {
      let newFennec = new Fennec('LittleFen', 5, Colors.White, 30, 'Fox');
    it('Should return name, age and color', () => {
      expect(newFennec.toString()).toEqual(`${newFennec.name} ${newFennec.color}`);
    });
    it('Should return age as number', () => {
      expect(newFennec.toNumber()).toEqual(newFennec.age);
    });
    it('Should return all of the properties', () => {
      expect(newFennec.wholeFox()).toEqual(
        `Name: ${newFennec.name} \n Age: ${newFennec.age} \n Color: ${newFennec.color} \n Lenght: ${newFennec.lenght} \n Ancestor: ${newFennec.ancestor}`,
      );
    });
    it('Should return interesting fact', () => {
      expect(newFennec.intFact()).toEqual(`${newFennec.name} is believed to be the smallest fox in existence`);
    });
  });
});

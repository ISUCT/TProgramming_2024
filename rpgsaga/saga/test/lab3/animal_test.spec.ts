import { Foxy } from '../../src/lab3/foxy';
import { Bonnie } from '../../src/lab3/bonnie';

describe('Foxy testing', () => {
  describe('Ctor testing', () => {
    it('Should pass in ctor', () => {
      expect(() => {
        new Foxy('Foxer', new Date(2020, 0), 'ff0000', 10);
      }).not.toThrow();
    });

    it('Should fall in ctor: color', () => {
      expect(() => {
        new Foxy('Foxer', new Date(2020, 0), 'wrongc', 10);
      }).toThrow();
    });

    it('Should fall in ctor: damage', () => {
      expect(() => {
        new Foxy('Foxer', new Date(2020, 0), 'ff0000', -10);
      }).toThrow();
    });

    it('Should ctor name match', () => {
      expect(new Foxy('Foxer', new Date(2020, 0), 'ff0000', 10).name).toEqual('Foxer');
    });

    it('Should ctor date match', () => {
      expect(new Foxy('Foxer', new Date(2020, 0), 'ff0000', 10).birthDate).toEqual(new Date(2020, 0));
    });

    it('Should ctor date match', () => {
      expect(new Foxy('Foxer', new Date(2020, 0), 'ff0033', 10).color).toEqual('ff0033');
    });

    it('Should ctor damageLevel match', () => {
      expect(new Foxy('Foxer', new Date(2020, 0), 'ff0033', 30).damageLevel).toEqual(30);
    });
  });

  describe('Getters/setters checking', () => {
    it('Should fall in setter', () => {
      expect(() => {
        new Foxy('Foxer', new Date(2020, 0), 'ff0000', 10).color = 'wrong!';
      }).toThrow();
    });

    it('Should not to fall in setter', () => {
      expect(() => {
        new Foxy('Foxer', new Date(2020, 0), 'ff0000', 10).color = 'ff0000';
      }).not.toThrow();
    });

    it('Should setter name match', () => {
      const instance = new Foxy('Foxer', new Date(2020, 0), 'ff0000', 10);
      instance.name = 'Fix';

      expect(instance.name).toEqual('Fix');
    });

    it('Should setter date match', () => {
      const instance = new Foxy('Foxer', new Date(2020, 0), 'ff0000', 10);
      instance.birthDate = new Date(2021, 0);

      expect(instance.birthDate).toEqual(new Date(2021, 0));
    });

    it('Should setter color match', () => {
      const instance = new Foxy('Foxer', new Date(2020, 0), 'ff0000', 10);
      instance.color = '0012cc'; // Oh no... It's a blue fox!

      expect(instance.color).toEqual('0012cc');
    });
  });

  describe('Functions checking', () => {
    it('Representation of fox should be a smile!', () => {
      expect(new Foxy('Foxer', new Date(2020, 0), 'ff0000', 10).getView()).toEqual('=^-^=');
    });
  });
});

describe('Bonnie testing', () => {
  describe('Getters/setters checking', () => {
    it('Should fall in setter', () => {
      expect(() => {
        new Bonnie('Bonnier', new Date(2020, 0), 'ff0000').color = 'wrong!';
      }).toThrow();
    });

    it('Should not to fall in setter', () => {
      expect(() => {
        new Bonnie('Foxer', new Date(2020, 0), 'ff0000').color = 'ff0000';
      }).not.toThrow();
    });

    it('Should setter name match', () => {
      const instance = new Bonnie('Foxer', new Date(2020, 0), 'ff0000');
      instance.name = 'Fix';

      expect(instance.name).toEqual('Fix');
    });

    it('Should setter date match', () => {
      const instance = new Bonnie('Foxer', new Date(2020, 0), 'ff0000');
      instance.birthDate = new Date(2021, 0);

      expect(instance.birthDate).toEqual(new Date(2021, 0));
    });

    it('Should setter color match', () => {
      const instance = new Bonnie('Foxer', new Date(2020, 0), 'ff0000');
      instance.color = '0012cc'; // Oh no... It's a blue fox!

      expect(instance.color).toEqual('0012cc');
    });
  });

  describe('Functions checking', () => {
    it('Representation of fox should be a smile!', () => {
      expect(new Bonnie('Foxer', new Date(2020, 0), 'ff0000').getView()).toEqual('! !\n^o^');
    });
  });

  describe('Foxy ctor testing', () => {
    it('Should pass in ctor', () => {
      expect(() => {
        new Bonnie('Bonnier', new Date(2020, 0), 'ff0000');
      }).not.toThrow();
    });

    it('Should fall in ctor', () => {
      expect(() => {
        new Bonnie('Bonnier', new Date(2020, 0), 'wrongc');
      }).toThrow();
    });

    it('Should ctor name match', () => {
      expect(new Bonnie('Bonnier', new Date(2020, 0), 'ff0000').name).toEqual('Bonnier');
    });

    it('Should ctor date match', () => {
      expect(new Bonnie('Bonnier', new Date(2020, 0), 'ff0000').birthDate).toEqual(new Date(2020, 0));
    });

    it('Should ctor date match', () => {
      expect(new Bonnie('Bonnier', new Date(2020, 0), 'ff0033').color).toEqual('ff0033');
    });
  });

  describe('Getters/setters checking', () => {
    it('Should fall in setter', () => {
      expect(() => {
        new Bonnie('Bonnier', new Date(2020, 0), 'ff0000').color = 'wrong!';
      }).toThrow();
    });

    it('Should not to fall in setter', () => {
      expect(() => {
        new Bonnie('Bonnier', new Date(2020, 0), 'ff0000').color = 'ff0000';
      }).not.toThrow();
    });

    it('Should setter name match', () => {
      const instance = new Bonnie('Bonnier', new Date(2020, 0), 'ff0000');
      instance.name = 'Fix';

      expect(instance.name).toEqual('Fix');
    });

    it('Should setter date match', () => {
      const instance = new Bonnie('Bonnier', new Date(2020, 0), 'ff0000');
      instance.birthDate = new Date(2021, 0);

      expect(instance.birthDate).toEqual(new Date(2021, 0));
    });

    it('Should setter color match', () => {
      const instance = new Bonnie('Bonnier', new Date(2020, 0), 'ff0000');
      instance.color = '0012cc'; // Oh no... It's a blue fox!

      expect(instance.color).toEqual('0012cc');
    });
  });

  describe('Functions checking', () => {
    it('Representation of fox should be a smile!', () => {
      expect(new Bonnie('Bonnier', new Date(2020, 0), 'ff0000').getView()).toEqual('! !\n^o^');
    });
  });
});

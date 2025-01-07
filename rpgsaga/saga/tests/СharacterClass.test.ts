import { Archer } from '../src/Characters/Archer';
import { Mage } from '../src/Characters/Mage';

describe('Class Character', () => {
  const arch = new Archer('Name', 'Archer', 0, 1);

  it('create New Character', () => {
    const magic = new Mage('Zorian', 'Mag', 100, 50);
    expect(magic.name).toEqual('Zorian');
    expect(magic.class).toEqual('Mag');
    expect(magic.health).toEqual(100);
    expect(magic.strength).toEqual(50);
  });

  it('Gets class', () => {
    expect(arch.name).toEqual('Name');
    expect(arch.class).toEqual('Archer');
    expect(arch.health).toEqual(0);
    expect(arch.strength).toEqual(1);
  });

  it('Sets class', () => {
    arch.name = 'Robbin';
    arch.class = 'Lychnik';
    arch.health = 10;
    arch.strength = 11;
    expect(arch.name).toEqual('Robbin');
    expect(arch.class).toEqual('Lychnik');
    expect(arch.health).toEqual(10);
    expect(arch.strength).toEqual(11);
  });
});

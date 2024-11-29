import { Character } from '../src/Character/Сharacter';

describe('Class Character', () => {
  const war = new Character('Name', 'Warrior', 1);

  it('create New Character', () => {
    const magic = new Character('Magika', 'Mag', 10);
    expect(magic.name).toEqual('Magika');
    expect(magic.class).toEqual('Mag');
    expect(magic.level).toEqual(10);
  });

  it('Gets class', () => {
    expect(war.name).toEqual('Name');
    expect(war.class).toEqual('Warrior');
    expect(war.level).toEqual(1);
  });

  it('Sets class', () => {
    war.name = 'Robbin';
    war.class = 'Lychnik';
    war.level = 1;
    expect(war.name).toEqual('Robbin');
    expect(war.class).toEqual('Lychnik');
    expect(war.level).toEqual(1);
  });
});

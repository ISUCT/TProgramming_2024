import { Bow } from "../../src/rpg saga/weapons/bowClass";
import { Sword } from "../../src/rpg saga/weapons/swordClass";
import { Wand } from "../../src/rpg saga/weapons/wandClass";


describe('Weapon Subclasses', () => {
  it('Should initialize Bow correctly', () => {
    const bow = new Bow('TestBow', 'Piercing', 15, 0.2);
    expect(bow._name).toBe('TestBow');
    expect(bow._damageType).toBe('Piercing');
    expect(bow._valueOfDamage).toBe(15);
    expect(bow._chanceOfCrit).toBe(0.2);
  });

  it('Should initialize Sword correctly', () => {
    const sword = new Sword('TestSword', 'Slashing', 20, 0.3);
    expect(sword._name).toBe('TestSword');
    expect(sword._damageType).toBe('Slashing');
    expect(sword._valueOfDamage).toBe(20);
    expect(sword._chanceOfCrit).toBe(0.3);
  });

  it('Should initialize Wand correctly', () => {
    const wand = new Wand('TestWand', 'Magic', 30, 0.4);
    expect(wand._name).toBe('TestWand');
    expect(wand._damageType).toBe('Magic');
    expect(wand._valueOfDamage).toBe(30);
    expect(wand._chanceOfCrit).toBe(0.4);
  });
});
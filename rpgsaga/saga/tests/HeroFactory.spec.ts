import { HeroFactory } from "../factories/HeroFactory";
import { Hero } from "../abstract/Hero";
import { Knight } from "../classes/Knight";
import { Mage } from "../classes/Mage";
import { Archer } from "../classes/Archer";

describe('HeroFactory', () => {
  it('should create a Knight', () => {
    const hero = HeroFactory.createHero('Knight', 'Артур');
    expect(hero).toBeInstanceOf(Knight);
    expect(hero.getName()).toBe('Артур');
  });

  it('should create a Mage', () => {
    const hero = HeroFactory.createHero('Mage', 'Гэндальф');
    expect(hero).toBeInstanceOf(Mage);
    expect(hero.getName()).toBe('Гэндальф');
  });

  it('should create an Archer', () => {
    const hero = HeroFactory.createHero('Archer', 'Эльдар');
    expect(hero).toBeInstanceOf(Archer);
    expect(hero.getName()).toBe('Эльдар');
  });

  it('should throw an error for unknown hero type', () => {
    expect(() => HeroFactory.createHero('Warrior', 'Джон')).toThrow('Unknown hero type');
  });
});

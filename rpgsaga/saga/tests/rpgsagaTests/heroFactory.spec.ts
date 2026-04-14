import { HeroFactory } from '../../src/Character/Factories/HeroFactory';
import { Hero } from '../../src/Character/hero';
import { Ability } from '../../src/Character/ability';
import { ArcherFactory } from '../../src/Character/Factories/ArcherFactory';
import { KnightFactory } from '../../src/Character/Factories/KnightFactory';
import { WizardFactory } from '../../src/Character/Factories/WizardFactory';

class MockArcherFactory extends ArcherFactory {
  createArcher(
    names: string[],
    heroHealth: number,
    heroStrength: number,
    heroAbilities: Ability[] | null = null,
  ): Hero {
    return new MockHero('Archer', heroHealth, heroStrength, heroAbilities);
  }
}

class MockKnightFactory extends KnightFactory {
  createKnight(
    names: string[],
    heroHealth: number,
    heroStrength: number,
    heroAbilities: Ability[] | null = null,
  ): Hero {
    return new MockHero('Knight', heroHealth, heroStrength, heroAbilities);
  }
}

class MockWizardFactory extends WizardFactory {
  createWizard(
    names: string[],
    heroHealth: number,
    heroStrength: number,
    heroAbilities: Ability[] | null = null,
  ): Hero {
    return new MockHero('Wizard', heroHealth, heroStrength, heroAbilities);
  }
}

class MockHero extends Hero {
  constructor(className: string, health: number, strength: number, abilities: Ability[] | null = null) {
    super(health, strength, '', abilities!);
    this.className = className;
  }
}


describe('HeroFactory tests', () => {
  let heroFactory: HeroFactory;
  let mockArcherFactory: MockArcherFactory;
  let mockKnightFactory: MockKnightFactory;
  let mockWizardFactory: MockWizardFactory;

  beforeEach(() => {
    mockArcherFactory = new MockArcherFactory();
    mockKnightFactory = new MockKnightFactory();
    mockWizardFactory = new MockWizardFactory();
    heroFactory = new HeroFactory();
    (heroFactory as any).archerFactory = mockArcherFactory;
    (heroFactory as any).knightFactory = mockKnightFactory;
    (heroFactory as any).wizardFactory = mockWizardFactory;
  });

  it('Should create a Knight', () => {
    const hero = heroFactory.createHero('Knight', 100, 20);
    expect(hero).toBeInstanceOf(Hero);
    expect(hero?.getClassName).toBe('Knight');
  });

  it('Should create an Archer', () => {
    const hero = heroFactory.createHero('Archer', 100, 20);
    expect(hero).toBeInstanceOf(Hero);
    expect(hero?.getClassName).toBe('Archer');
  });

  it('Should create a Wizard', () => {
    const hero = heroFactory.createHero('Wizard', 100, 20);
    expect(hero).toBeInstanceOf(Hero);
    expect(hero?.getClassName).toBe('Wizard');
  });

  it('Should return undefined for an invalid class', () => {
    const hero = heroFactory.createHero('InvalidClass', 100, 20);
    expect(hero).toBeUndefined();
  });

  it('Should create a random hero', () => {
    const hero = heroFactory.createRandomHero();
    expect(hero).toBeInstanceOf(Hero);
    expect(['Knight', 'Archer', 'Wizard']).toContain(hero.getClassName);
  });

  it('Should create random heroes', () => {
    const heroes = heroFactory.createRandomHeroes(3);
    expect(heroes.length).toBe(3);
    heroes.forEach(hero => expect(['Knight', 'Archer', 'Wizard']).toContain(hero.getClassName));
  });
});
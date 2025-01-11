import { IAbility } from "../../src/Ability/Ability";
import { FactoryArcher } from "../../src/Characters/FactoryArcher";
import { FactoryCharacter } from "../../src/Characters/FactoryCharacter";
import { FactoryKnight } from "../../src/Characters/FactoryKnight";
import { FactoryMage } from "../../src/Characters/FactoryMage";
import { Character } from "../../src/Characters/Сharacter";


class MockArcherFactory extends FactoryArcher {
  createArcher(
    names: string[],
    characterHealth: number,
    characterStrength: number,
    characterAbilitys: IAbility[] | null = null,
  ): Character {
    return new MockCharacter('Archer', characterHealth, characterStrength, characterAbilitys);
  }
}

class MockFactoryKnight extends FactoryKnight {
  createKnight(
    names: string[],
    characterHealth: number,
    characterStrength: number,
    characterAbilitys: IAbility[] | null = null,
  ): Character {
    return new MockCharacter('Knight', characterHealth, characterStrength, characterAbilitys);
  }
}

class MockMageFactory extends FactoryMage {
  createMage(
    names: string[],
    characterHealth: number,
    characterStrength: number,
    characterAbilitys: IAbility[] | null = null,
  ): Character {
    return new MockCharacter('Mage', characterHealth, characterStrength, characterAbilitys);
  }
}

class MockCharacter extends Character {
  constructor(className: string, health: number, strength: number, abilities: IAbility[] | null = null) {
    super(health, strength, '', abilities!);
    this.classNameProtected = className;
  }
}

describe('CharacterFactory tests', () => {
  let characterFactory: FactoryCharacter;
  let mockArcherFactory: MockArcherFactory;
  let mockFactoryKnight: MockFactoryKnight;
  let mockMageFactory: MockMageFactory;

  beforeEach(() => {
    mockArcherFactory = new MockArcherFactory();
    mockFactoryKnight = new MockFactoryKnight();
    mockMageFactory = new MockMageFactory();
    characterFactory = new FactoryCharacter();
    (characterFactory as any).archerFactory = mockArcherFactory;
    (characterFactory as any).knightFactory = mockFactoryKnight;
    (characterFactory as any).mageFactory = mockMageFactory;
  });

  it('Should create a Knight', () => {
    const character = characterFactory.createCharacter('Knight', 100, 20);
    expect(character).toBeInstanceOf(Character);
    expect(character?.className).toBe('Knight');
  });

  it('Should create an Archer', () => {
    const character = characterFactory.createCharacter('Archer', 100, 20);
    expect(character).toBeInstanceOf(Character);
    expect(character?.className).toBe('Archer');
  });

  it('Should create a Mage', () => {
    const character = characterFactory.createCharacter('Mage', 100, 20);
    expect(character).toBeInstanceOf(Character);
    expect(character?.className).toBe('Mage');
  });

  it('Should return undefined for an invalid class', () => {
    const character = characterFactory.createCharacter('InvalidClass', 100, 20);
    expect(character).toBeUndefined();
  });

  it('Should create a random character', () => {
    const character = characterFactory.createRandomCharacter();
    expect(character).toBeInstanceOf(Character);
    expect(['Knight', 'Archer', 'Mage']).toContain(character.className);
  });

  it('Should create random characters', () => {
    const characters = characterFactory.createRandomCharacters(3);
    expect(characters.length).toBe(3);
    characters.forEach(character => expect(['Knight', 'Archer', 'Mage']).toContain(character.className));
  });
});

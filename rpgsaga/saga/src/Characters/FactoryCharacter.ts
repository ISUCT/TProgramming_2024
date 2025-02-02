import { IAbility } from '../Ability/Ability';
import { getRandomNumber, getRandomArrayElement } from '../utils/random/Random';

import { Character } from './Сharacter';
import { FactoryArcher } from './FactoryArcher';
import { FactoryMage as FactoryMage } from './FactoryMage';
import { FactoryKnight as FactoryKnight } from './FactoryKnight';

export class FactoryCharacter {
  private factoryArcher = new FactoryArcher();
  private factoryknight = new FactoryKnight();
  private factoryMage = new FactoryMage();

  public createCharacter(
    characterClass: string,
    characterHealth: number,
    characterStrength: number,
    characterAbilitys: IAbility[] | null = null,
  ): Character | undefined {
    const names: string[] = [
      'Эльдар',
      'Артур',
      'Гэндальф',
      'Вильямс',
      'Агатон',
      'Аполлон',
      'Артемида',
      'Зевс',
      'Персей',
      'Феникс',
      'Элита',
      'Ирида',
      'Медея',
      'Орион',
      'Рафаэль',
      'Себастиан',
      'Эмиль',
      'Аврора',
      'Веста',
      'Лилия',
      'Мира',
    ];
    switch (characterClass) {
      case 'Knight':
        return this.factoryknight.createKnight(names, characterHealth, characterStrength, characterAbilitys);
      case 'Archer':
        return this.factoryArcher.createArcher(names, characterHealth, characterStrength, characterAbilitys);
      case 'Mage':
        return this.factoryMage.createMage(names, characterHealth, characterStrength, characterAbilitys);
    }
  }

  createRandomCharacter(): Character {
    const characterFactory = new FactoryCharacter();
    const classes: string[] = ['Knight', 'Archer', 'Mage'];
    const characterClass: string = getRandomArrayElement(classes)!;
    const health: number = getRandomNumber(125, 150);
    const strength: number = getRandomNumber(10, 15);
    return characterFactory.createCharacter(characterClass, health, strength)!;
  }

  createRandomCharacters(charactersCount: number): Character[] {
    const characters: Character[] = [];
    for (let i = 0; i < charactersCount; i++) {
      characters.push(this.createRandomCharacter());
    }
    return characters;
  }
}

import { IAbility } from '../Ability/Ability';
import { FactoryAbility } from '../Ability/FactoryAbility';
import { getRandomArrayElement } from '../utils/random/Random';

import { Mage } from './Mage';
import { Character } from './Сharacter';

export class FactoryMage {
  private factoryAbility = new FactoryAbility();

  public createMage(
    names: string[],
    characterHealth: number,
    characterStrength: number,
    characterAbilitys: IAbility[] | null = null,
  ): Character {
    const name: string = getRandomArrayElement(names)!;
    const health: number = characterHealth;
    const strength: number = characterStrength;

    if (characterAbilitys !== null) {
      return new Mage(health, strength, name, characterAbilitys);
    } else {
      const abilities: IAbility[] = [
        this.factoryAbility.createAbilityFromTemplate('заворожение')!,
        this.factoryAbility.createAbilityFromTemplate('ледяные стрелы')!,
      ];
      return new Mage(health, strength, name, abilities);
    }
  }
}

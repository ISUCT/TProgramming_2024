import { IAbility } from '../Ability/Ability';
import { FactoryAbility } from '../Ability/FactoryAbility';
import { getRandomArrayElement } from '../utils/random/Random';

import { Knight } from './Knight';
import { Character } from './Сharacter';

export class FactoryKnight {
  private factoryAbility = new FactoryAbility();

  public createKnight(
    names: string[],
    characterHealth: number,
    characterStrength: number,
    characterAbilitys: IAbility[] | null = null,
  ): Character {
    const name: string = getRandomArrayElement(names)!;
    const health: number = characterHealth;
    const strength: number = characterStrength;

    if (characterAbilitys !== null) {
      return new Knight(health, strength, name, characterAbilitys);
    } else {
      const abilities: IAbility[] = [
        this.factoryAbility.createAbilityFromTemplate('удар возмездия')!,
        this.factoryAbility.createAbilityFromTemplate('ледяные стрелы')!,
      ];
      return new Knight(health, strength, name, abilities);
    }
  }
}

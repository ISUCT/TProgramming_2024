import { IAbility } from '../Ability/Ability';
import { FactoryAbility } from '../Ability/FactoryAbility';
import { getRandomArrayElement } from '../utils/random/Random';

import { Archer } from './Archer';
import { Character } from './Сharacter';

export class FactoryArcher {
  private factoryability = new FactoryAbility();

  public createArcher(
    names: string[],
    characterHealth: number,
    characterStrength: number,
    characterAbilitys: IAbility[] | null = null,
  ): Character {
    const name: string = getRandomArrayElement(names)!;
    const health: number = characterHealth;
    const strength: number = characterStrength;

    if (characterAbilitys !== null) {
      return new Archer(health, strength, name, characterAbilitys);
    } else {
      const firstAbility = this.factoryability.createAbilityFromTemplate('ледяные стрелы')!;
      firstAbility.usageCount = 2;
      firstAbility.maxAbilityUsage = 2;
      const abilities: IAbility[] = [firstAbility, this.factoryability.createAbilityFromTemplate('огненные стрелы')!];
      return new Archer(health, strength, name, abilities);
    }
  }
}

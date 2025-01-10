import { IAbility } from '../Ability/Ability';
import { FactoryAbility } from '../Ability/FactoryAbility';
import {getRandomArrayElement} from '../utils/random/Random';

import { Mage } from './Mage';
import { Character } from './Сharacter';

export class FactoryMage {
  private factoryAbility = new FactoryAbility();

  public createMage(
    names: string[],
    playerHealth: number,
    playerStrength: number,
    playerSkills: IAbility[] | null = null,
  ): Character {
    const name: string = getRandomArrayElement(names)!;
    const health: number = playerHealth;
    const strength: number = playerStrength;

    if (playerSkills !== null) {
      return new Mage(name, health, strength, playerSkills);
    } else {
      const skills: IAbility[] = [
        this.factoryAbility.createSkillFromTemplate('заворожение')!,
        this.factoryAbility.createSkillFromTemplate('ледяные стрелы')!,
      ];
      return new Mage(name, health, strength, skills);
    }
  }
}

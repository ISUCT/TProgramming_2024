import { IAbility } from '../Ability/Ability';
import { FactoryAbility } from '../Ability/FactoryAbility';
import { getRandomArrayElement } from '../utils/randomization';

import { Knight } from './Knight';
import { Character } from './Сharacter';

export class FactoryKnight {
  private factoryAbility = new FactoryAbility();

  public createKnight(
    names: string[],
    playerHealth: number,
    playerStrength: number,
    playerSkills: IAbility[] | null = null,
  ): Character {
    const name: string = getRandomArrayElement(names)!;
    const health: number = playerHealth;
    const strength: number = playerStrength;

    if (playerSkills !== null) {
      return new Knight(name, health, strength, playerSkills);
    } else {
      const skills: IAbility[] = [
        this.factoryAbility.createSkillFromTemplate('удар возмездия')!,
        this.factoryAbility.createSkillFromTemplate('ледяные стрелы')!,
      ];
      return new Knight(name, health, strength, skills);
    }
  }
}

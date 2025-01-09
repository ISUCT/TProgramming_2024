import { IAbility } from '../Ability/Ability';
import { FabricAbility } from '../Ability/FabricAbility';
import { getRandomArrayElement } from '../utils/randomization';

import { Knight } from './Knight';
import { Character } from './Сharacter';

export class KnightFabric {
  private skillFabric = new FabricAbility();

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
        this.skillFabric.createSkillFromTemplate('удар возмездия')!,
        this.skillFabric.createSkillFromTemplate('ледяные стрелы')!,
      ];
      return new Knight(name, health, strength, skills);
    }
  }
}

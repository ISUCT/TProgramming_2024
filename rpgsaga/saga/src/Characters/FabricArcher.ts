import { IAbility } from '../Ability/Ability';
import { FabricAbility } from '../Ability/FabricAbility';
import { getRandomArrayElement } from '../utils/randomization';

import { Archer } from './Archer';
import { Character } from './Сharacter';

export class ArcherFabric {
  private skillFabric = new FabricAbility();

  public createArcher(
    names: string[],
    playerHealth: number,
    playerStrength: number,
    playerSkills: IAbility[] | null = null,
  ): Character {
    const name: string = getRandomArrayElement(names)!;
    const health: number = playerHealth;
    const strength: number = playerStrength;

    if (playerSkills !== null) {
      return new Archer(name, health, strength, playerSkills);
    } else {
      const firstSkill = this.skillFabric.createSkillFromTemplate('ледяные стрелы')!;
      firstSkill.usageCount = 2;
      firstSkill.initialSkillUsage = 2;
      const skills: IAbility[] = [firstSkill, this.skillFabric.createSkillFromTemplate('огненные стрелы')!];
      return new Archer(name, health, strength, skills);
    }
  }
}

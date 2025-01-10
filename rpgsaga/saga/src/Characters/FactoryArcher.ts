import { IAbility } from '../Ability/Ability';
import { FactoryAbility } from '../Ability/FactoryAbility';
import { getRandomArrayElement } from '../utils/randomization';

import { Archer } from './Archer';
import { Character } from './Сharacter';

export class FactoryArcher {
  private Factoryskill = new FactoryAbility();

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
      const firstSkill = this.Factoryskill.createSkillFromTemplate('ледяные стрелы')!;
      firstSkill.usageCount = 2;
      firstSkill.initialSkillUsage = 2;
      const skills: IAbility[] = [firstSkill, this.Factoryskill.createSkillFromTemplate('огненные стрелы')!];
      return new Archer(name, health, strength, skills);
    }
  }
}

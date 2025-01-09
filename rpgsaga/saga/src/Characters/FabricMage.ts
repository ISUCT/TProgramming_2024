import { IAbility } from '../Ability/Ability';
import { FabricAbility } from '../Ability/FabricAbility';
import { getRandomArrayElement } from '../utils/randomization';

import { Mage } from './Mage';
import { Character } from './Сharacter';

export class WizardFabric {
  private skillFabric = new FabricAbility();

  public createWizard(
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
        this.skillFabric.createSkillFromTemplate('заворожение')!,
        this.skillFabric.createSkillFromTemplate('ледяные стрелы')!,
      ];
      return new Mage(name, health, strength, skills);
    }
  }
}

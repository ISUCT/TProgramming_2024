import { Hero } from '../hero';
import { Wizard } from '../Classes/wizard';
import { Ability } from '../ability';
import { randomArrayElement } from '../Functions/randomArrayElement';
import { SkillFactory } from '../Factories/SkillFactory';

export class WizardFactory {
  private skillFactory = new SkillFactory();

  public createWizard(
    names: string[],
    heroHealth: number,
    heroStrength: number,
    heroAbilities: Ability[] | null = null,
  ): Hero {
    const name: string = randomArrayElement(names)!;
    const health: number = heroHealth;
    const strength: number = heroStrength;

    if (heroAbilities !== null) {
      return new Wizard(health, strength, name, heroAbilities);
    } else {
      const abilities: Ability[] = [
        this.skillFactory.createAbilityFromTemplate('заворожение')!,
        this.skillFactory.createAbilityFromTemplate('ледяные стрелы')!,
      ];
      return new Wizard(health, strength, name, abilities);
    }
  }
}

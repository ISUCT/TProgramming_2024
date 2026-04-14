import { Hero } from '../hero';
import { Archer } from '../Classes/archer';
import { Ability } from '../ability';
import { randomArrayElement } from '../Functions/randomArrayElement';
import { SkillFactory } from '../Factories/SkillFactory';

export class ArcherFactory {
  private skillFactory = new SkillFactory();

  public createArcher(
    names: string[],
    heroHealth: number,
    heroStrength: number,
    heroAbilities: Ability[] | null = null,
  ): Hero {
    const name: string = randomArrayElement(names)!;
    const health: number = heroHealth;
    const strength: number = heroStrength;

    if (heroAbilities !== null) {
      return new Archer(health, strength, name, heroAbilities);
    } else {
      const firstAbility = this.skillFactory.createAbilityFromTemplate('ледяные стрелы')!;
      firstAbility.usageCount = 2;
      firstAbility.maxAbilityUsage = 2;
      const abilities: Ability[] = [firstAbility, this.skillFactory.createAbilityFromTemplate('огненные стрелы')!];
      return new Archer(health, strength, name, abilities);
    }
  }
}

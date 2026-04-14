import { Hero } from '../hero';
import { Knight } from '../Classes/knight';
import { Ability } from '../ability';
import { randomArrayElement } from '../Functions/randomArrayElement';
import { SkillFactory } from '../Factories/SkillFactory';

export class KnightFactory {
  private skillFactory = new SkillFactory();

  public createKnight(
    names: string[],
    heroHealth: number,
    heroStrength: number,
    heroAbilities: Ability[] | null = null,
  ): Hero {
    const name: string = randomArrayElement(names)!;
    const health: number = heroHealth;
    const strength: number = heroStrength;

    if (heroAbilities !== null) {
      return new Knight(health, strength, name, heroAbilities);
    } else {
      const abilities: Ability[] = [
        this.skillFactory.createAbilityFromTemplate('удар возмездия')!,
        this.skillFactory.createAbilityFromTemplate('ледяные стрелы')!,
      ];
      return new Knight(health, strength, name, abilities);
    }
  }
}

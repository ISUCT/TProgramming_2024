import { Player } from '../../abstract/Player';
import { Knight } from '../../classes';
import { ISkill } from '../../skills/ISkill';
import { getRandomArrayElement } from '../../utils/randomization';
import { IWeapon } from '../../weapon/IWeapon';
import { SkillFabric } from '../skillFabric/SkillFabric';

export class KnightFabric {
  private skillFabric = new SkillFabric();

  public createKnight(
    names: string[],
    playerHealth: number,
    playerStrength: number,
    playerWeapon: IWeapon,
    playerSkills: ISkill[] | null = null,
  ): Player {
    const name: string = getRandomArrayElement(names)!;
    const health: number = playerHealth;
    const strength: number = playerStrength;
    const weapon: IWeapon = playerWeapon;

    if (playerSkills !== null) {
      return new Knight(health, strength, name, weapon, playerSkills);
    } else {
      const skills: ISkill[] = [
        this.skillFabric.createSkillFromTemplate('удар возмездия')!,
        this.skillFabric.createSkillFromTemplate('ледяные стрелы')!,
      ];
      return new Knight(health, strength, name, weapon, skills);
    }
  }
}

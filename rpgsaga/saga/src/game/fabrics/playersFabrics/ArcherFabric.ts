import { Player } from '../../abstract/Player';
import { Archer } from '../../classes';
import { ISkill } from '../../skills/ISkill';
import { getRandomArrayElement } from '../../utils/randomization';
import { IWeapon } from '../../weapon/IWeapon';
import { SkillFabric } from '../skillFabric/SkillFabric';

export class ArcherFabric {
  private skillFabric = new SkillFabric();

  public createArcher(
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
      return new Archer(health, strength, name, weapon, playerSkills);
    } else {
      const firstSkill = this.skillFabric.createSkillFromTemplate('ледяные стрелы')!;
      firstSkill.usageCount = 2;
      firstSkill.initialSkillUsage = 2;
      const skills: ISkill[] = [firstSkill, this.skillFabric.createSkillFromTemplate('огненные стрелы')!];
      return new Archer(health, strength, name, weapon, skills);
    }
  }
}

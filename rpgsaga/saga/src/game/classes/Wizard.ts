import { Player } from '../abstract/Player';
import { ISkill } from '../skills/ISkill';
import { IWeapon } from '../weapon/IWeapon';

export class Wizard extends Player {
  public _className: string = 'Wizard';

  constructor(
    playerHealth: number,
    playerStrength: number,
    playerName: string,
    playerWeapon: IWeapon,
    playerSkills: ISkill[],
  ) {
    super(playerHealth, playerStrength, playerName, playerWeapon, playerSkills);
  }
}

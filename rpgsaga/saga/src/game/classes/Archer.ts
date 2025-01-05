import { Player } from '../abstract/Player';
import { ISkill } from '../skills/ISkill';
import { IWeapon } from '../weapon/IWeapon';

export class Archer extends Player {
  protected _className: string = 'Archer';

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

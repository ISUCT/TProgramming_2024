import { Player } from '../abstract/Player';
import { ISkill } from '../skills/ISkill';
import { IWeapon } from '../weapon/IWeapon';

export class Knight extends Player {
  protected _className: string = 'Knight';

  constructor(
    playerHealth: number,
    playerStrength: number,
    playerName: string,
    playerWeapon: IWeapon,
    playerSkills: ISkill[],
  ) {
    super(playerHealth, playerStrength, playerName, playerWeapon, playerSkills);
  }

  public takeDamage(damage: number, skill: ISkill | undefined = undefined): number {
    let currentDamage: number = damage;
    if (skill !== undefined && skill.name !== 'ледяные стрелы' && skill.buff) {
      currentDamage = damage + skill.buff.strength;
    }
    this._health -= currentDamage;
    if (this._health <= 0) {
      this._health = 0;
      this._isAlive = false;
    }
    return currentDamage;
  }
}

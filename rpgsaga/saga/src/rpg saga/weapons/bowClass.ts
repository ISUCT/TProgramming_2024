import { Weapon } from './weaponClass';

export class Bow extends Weapon {
  constructor(name: string, damageType: string, valueOfDamage: number, chanceOfCrit: number) {
    super(name, damageType, valueOfDamage, chanceOfCrit);
  }
}

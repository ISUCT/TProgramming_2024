import { Weapon } from './weaponClass';

export class Wand extends Weapon {
  constructor(name: string, damageType: string, valueOfDamage: number, chanceOfCrit: number) {
    super(name, damageType, valueOfDamage, chanceOfCrit);
  }
}

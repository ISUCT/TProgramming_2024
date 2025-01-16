import { DamageType } from './lists';

export class Weapon {
  name: string;
  damage: number;
  damageType: DamageType;
  constructor(name: string, damage: number, damageType: DamageType) {
    this.name = name;
    this.damage = damage;
    this.damageType = damageType;
  }
}

import { DamageTypes } from './lists';

export class Weapon {
  private _damageType: DamageTypes;
  private _damage: number;
  private _name: string;
  constructor(name: string, damageType: DamageTypes, damage: number) {
    this._name = name;
    this.damage = damage;
    this.damageType = damageType;
  }
  private set damage(value) {
    if (value > 0) {
      this._damage = value;
    } else {
      throw new Error("Damage can't be less then 0");
    }
  }
  private set damageType(value: DamageTypes) {
    this._damageType = value;
  }
  public get damage() {
    return this._damage;
  }
  public get damageType() {
    return this._damageType;
  }
  public get name() {
    return this._name;
  }
  public displayInfo() {
    return `${this.name} урон - ${this.damageType.toLowerCase()}:${this.damage}`;
  }
}

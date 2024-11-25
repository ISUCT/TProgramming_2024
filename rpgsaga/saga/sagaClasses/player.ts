import { DamageTypes } from './lists';
import { Mage } from './mage';
import { Ranger } from './ranger';
import { Warrior } from './warrior';
import { Weapon } from './weapon';

export abstract class Player {
  private _name: string;
  private _maxHealth: number;
  private _health: number;
  private _weapon: Weapon;
  private _isAlive: boolean;
  private resists = {
    cutting: 1,
    crushing: 1,
    stabbing: 1,
    magic: 1,
  };
  constructor(name: string, maxHealth: number, weapon: Weapon) {
    this._name = name;
    this._weapon = weapon;
    this._maxHealth = maxHealth;
    this._health = maxHealth;
    this._isAlive = true;
  }
  public get weapon() {
    return this._weapon;
  }
  public get name() {
    return this._name;
  }
  protected set health(value) {
    this._health = value;
  }
  public get health() {
    return this._health;
  }
  public get maxHealth() {
    return this._maxHealth;
  }
  public get isAlive() {
    return this._isAlive;
  }
  protected set isAlive(alive: boolean) {
    this._isAlive = alive;
  }
  protected set magResist(value) {
    this.resists.magic = value;
  }
  public get magResist() {
    return this.resists.magic;
  }
  protected set cuttingResist(value) {
    this.resists.cutting = value;
  }
  public get cuttingResist() {
    return this.resists.cutting;
  }
  protected set stabbingResist(value) {
    this.resists.stabbing = value;
  }
  public get stabbingResist() {
    return this.resists.stabbing;
  }
  protected set crushingResist(value) {
    this.resists.crushing = value;
  }
  public get crushingResist() {
    return this.resists.crushing;
  }
  protected damageScales(weapon: Weapon): number {
    switch (weapon.damageType) {
      case DamageTypes.crushing:
        return 1 - this.crushingResist / 100;
      case DamageTypes.cutting:
        return 1 - this.cuttingResist / 100;
      case DamageTypes.stabbing:
        return 1 - this.stabbingResist / 100;
      case DamageTypes.magic:
        return 1 - this.magResist / 100;
    }
  }
  public attackedBy(attacker: Mage | Warrior | Ranger): void {
    if (!this.isAlive) {
      return;
    }
    this.health = this.health - attacker.weapon.damage * this.damageScales(attacker.weapon);
    console.log(
      `${attacker.name} атакует ${this.name} нанося ${attacker.weapon.damage * this.damageScales(attacker.weapon)} урона`,
    );
    if (this.health <= 0) {
      this.isAlive = false;
      this.health = 0;
      console.log(`${this.name} умирает`);
    }
  }
  abstract displayInfo(): string;
}

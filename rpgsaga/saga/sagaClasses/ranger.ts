import { Mage } from './mage';
import { Player } from './player';
import { randomizeInteger } from './randoms';
import { Warrior } from './warrior';
import { Weapon } from './weapon';

export class Ranger extends Player {
  private _maxStamina: number;
  private _currentStamina: number;
  private _missChance: number;
  constructor(name: string, health: number, weapon: Weapon, maxStamina: number) {
    super(name, health, weapon);
    this.maxStamina = maxStamina;
    this._currentStamina = maxStamina;
    this.missChance = 50;
    this.magResist = -20;
    this.cuttingResist = -20;
    this.stabbingResist = -20;
    this.crushingResist = -20;
  }
  public get missChance() {
    return this._missChance;
  }
  public set missChance(value) {
    if (value > 0) {
      this._missChance = value;
    }
  }
  public get curStamina() {
    return this._currentStamina;
  }
  public set curStamina(value) {
    if (value > 0) {
      this._currentStamina = value;
    }
  }
  public get maxStamina() {
    return this._maxStamina;
  }
  private set maxStamina(value) {
    if (value > 0) {
      this._maxStamina = value;
    }
  }
  public attackedBy(attacker: Mage | Warrior | Ranger): void {
    if (!(this.isAlive && attacker.isAlive)) {
      return;
    }
    if (randomizeInteger(0, 100) > this.missChance) {
      super.attackedBy(attacker);
    } else {
      console.log(`${attacker.name} промахнулся по ${this.name}`);
    }
  }
  public displayInfo(): string {
    return `Рейнджер по имени ${this.name} | ${this.health}/${this.maxHealth} HP | ${this.curStamina}/${this.maxStamina} SP | Оружие : ${this.weapon.displayInfo()} |`;
  }
}

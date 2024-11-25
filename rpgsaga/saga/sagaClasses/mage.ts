import { Player } from './player';
import { Weapon } from './weapon';

export class Mage extends Player {
  private _maxMana: number;
  private _currentMana: number;
  constructor(name: string, health: number, weapon: Weapon, maxMana: number) {
    super(name, health, weapon);
    this.maxMana = maxMana;
    this._currentMana = maxMana;
    this.magResist = 50;
    this.cuttingResist = -20;
    this.stabbingResist = -20;
    this.crushingResist = -20;
  }
  public get curMana() {
    return this._currentMana;
  }
  public set curMana(value) {
    if (value > 0) {
      this._currentMana = value;
    }
  }
  private set maxMana(value) {
    if (value > 0) {
      this._maxMana = value;
    }
  }
  public displayInfo(): string {
    return `Маг по имени ${this.name} | ${this.health}/${this.maxHealth} HP | ${this.curMana}/${this.maxMana} SP | Оружие : ${this.weapon.displayInfo()} |`;
  }
}

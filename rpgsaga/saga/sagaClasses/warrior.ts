import { Player } from './player';
import { Weapon } from './weapon';

export class Warrior extends Player {
  private _maxStamina: number;
  private _currentStamina: number;
  constructor(name: string, health: number, weapon: Weapon, maxStamina: number) {
    super(name, health, weapon);
    this.maxStamina = maxStamina;
    this._currentStamina = maxStamina;
    this.magResist = -50;
    this.cuttingResist = 20;
    this.stabbingResist = 20;
    this.crushingResist = 20;
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
  public displayInfo(): string {
    return `Воин по имени ${this.name} | ${this.health}/${this.maxHealth} HP | ${this.curStamina}/${this.maxStamina} SP | Оружие : ${this.weapon.displayInfo()} |`;
  }
}

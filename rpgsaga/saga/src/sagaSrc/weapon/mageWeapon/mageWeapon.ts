import Weapon from '../weaponInterface';

abstract class MageWaepon implements Weapon {
  name: string;
  private _baseDamage: number;
  private _currentDamage: number;
  private _attackType: string;

  public set currentDamage(damage: number) {
    this._currentDamage = damage;
  }

  public get attackType() {
    return this._attackType;
  }
  get currentDamage(){
    return this._currentDamage;
  }
  constructor(name: string, baseDamage: number, attackType: string) {
    this.name = name;
    this._baseDamage = baseDamage;
    this._currentDamage = baseDamage;
    this._attackType = attackType;
  }

  attack() {
    return [this._currentDamage, this._attackType];
  }
  changeDamage(value: number): void {
    const diff = this._currentDamage + value;
    if (diff < 0) {
      this._currentDamage = 0;
    } else {
      this._currentDamage = diff;
    }
  }
  multiplyDamage(value: number): void {
    this._currentDamage = this._currentDamage * value;
  }
  setDamageDefault(): void {
    this._currentDamage = this._baseDamage;
  }
}
export default MageWaepon;

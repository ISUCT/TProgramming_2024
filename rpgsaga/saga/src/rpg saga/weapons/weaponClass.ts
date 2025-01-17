export abstract class Weapon {
  _name: string;
  _damageType: string;
  _valueOfDamage: number;
  _chanceOfCrit: number;
  constructor(name: string, damageType: string, valueOfDamage: number, chanceOfCrit) {
    this._name = name;
    this._damageType = damageType;
    this._valueOfDamage = valueOfDamage;
    this._chanceOfCrit = chanceOfCrit;
  }
}

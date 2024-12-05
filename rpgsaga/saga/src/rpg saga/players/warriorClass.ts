import { Sword } from '../weapons/swordClass';
import { solveCritChance } from '../necessary/critChance';

import { Player } from './playerClass';

export class Warrior extends Player {
  private _weaponOfPerson: Sword;
  constructor(
    alive: boolean,
    silence: boolean,
    rpgClass: string,
    name: string,
    healthPoints: number,
    weaponOfPerson: Sword,
    strength: number,
    agility: number,
    intelligence: number,
  ) {
    super(alive, silence, rpgClass, name, healthPoints, strength, agility, intelligence);
    this._weaponOfPerson = weaponOfPerson;
  }
  public blowOfJustice(): number {
    // +30% к дефолт атаке. кд 2 раунда
    const damageGiven = Math.round(
      this._strength * this._weaponOfPerson._valueOfDamage * solveCritChance(this._weaponOfPerson._chanceOfCrit) * 1.3,
    );
    console.log(`${this._name} Использовал Blow of justice атаковал мечом ${this._weaponOfPerson._name}`);
    return damageGiven;
  }
  public defaultAttack(): number {
    const damageGiven =
      this._strength * this._weaponOfPerson._valueOfDamage * solveCritChance(this._weaponOfPerson._chanceOfCrit);
    console.log(`${this._name} атаковал мечом ${this._weaponOfPerson._name}`);
    return damageGiven;
  }
  public attack(kd: number): [number, number, string] {
    let newkd: number;
    if (this._alive && !this._silence) {
      if (kd > 0) {
        newkd = kd--;
        return [newkd, this.defaultAttack(), ''];
      } else {
        newkd = 3;
        return [newkd, this.blowOfJustice(), ''];
      }
    } else if (this._alive && this._silence) {
      newkd = kd--;
      this._silence = !this._silence;
      return [newkd, null, ''];
    } else {
      return [null, null, ''];
    }
  }
}

import { Wand } from '../weapons/wandClass';
import { solveCritChance } from '../necessary/critChance';

import { Player } from './playerClass';

export class Wizard extends Player {
  private _weaponOfPerson: Wand;
  constructor(
    alive: boolean,
    silence: boolean,
    rpgClass: string,
    name: string,
    healthPoints: number,
    weaponOfPerson: Wand,
    strength: number,
    agility: number,
    intelligence: number,
  ) {
    super(alive, silence, rpgClass, name, healthPoints, strength, agility, intelligence);
    this._weaponOfPerson = weaponOfPerson;
  }
  public checkLiveStatus(): void {
    if (this._healthPoints > 0) {
    } else {
      this._alive = false;
    }
  }
  public silence(): string {
    // дает безмолвие противнику(противник пропускает ход). сам маг не наносит урон
    console.log(`${this._name} обезмолвил врага.`);
    return 'silence';
  }
  public defaultAttack(): number {
    const damageGiven =
      this._intelligence * this._weaponOfPerson._valueOfDamage * solveCritChance(this._weaponOfPerson._chanceOfCrit);
    console.log(`${this._name} выстрелил сгустком магии из ${this._weaponOfPerson._name}`);
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
        return [newkd, null, this.silence()];
      }
    } else if (this._alive && this._silence) {
      newkd--;
      this._silence = !this._silence;
      return [newkd, null, ''];
    } else {
      return [null, null, ''];
    }
  }
}

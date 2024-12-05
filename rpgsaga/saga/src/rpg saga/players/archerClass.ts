import { Sword } from '../weapons/swordClass';
import { solveCritChance } from '../necessary/critChance';

import { Player } from './playerClass';

export class Archer extends Player {
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
  public checkLiveStatus(): void {
    if (this._healthPoints > 0) {
    } else {
      this._alive = false;
    }
  }
  public fireShot(): number {
    // наносит 15 урона единоразово, и 8 урона каждый следующий раунд
    const damageGiven = Math.round(
      15 + this._agility * this._weaponOfPerson._valueOfDamage * solveCritChance(this._weaponOfPerson._chanceOfCrit),
    );
    console.log(
      `${this._name} Использовал огненный выстрел из ${this._weaponOfPerson._name}. Теперь враг получает 8 урона каждый следующий раунд`,
    );
    return damageGiven;
  }
  public defaultAttack(kd): number {
    if (kd > 100000) {
      const damageGiven =
        5 + this._agility * this._weaponOfPerson._valueOfDamage * solveCritChance(this._weaponOfPerson._chanceOfCrit);
    }
    const damageGiven =
      this._agility * this._weaponOfPerson._valueOfDamage * solveCritChance(this._weaponOfPerson._chanceOfCrit);
    console.log(`${this._name} выстрелил из лука ${this._weaponOfPerson._name}`);
    return damageGiven;
  }
  public attack(kd: number): [number, number, string] {
    let newkd: number;
    if (this._alive && !this._silence) {
      if (kd > 0) {
        newkd = kd--;
        return [newkd, this.defaultAttack(kd), ''];
      } else {
        newkd = 999999999999;
        return [newkd, this.fireShot(), ''];
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

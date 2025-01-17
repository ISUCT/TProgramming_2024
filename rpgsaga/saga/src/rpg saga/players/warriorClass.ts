import { Sword } from '../weapons/swordClass';
import { solveCritChance } from '../necessary/critChance';

import { Player } from './playerClass';
import { Weapon } from '../weapons/weaponClass';

export class Warrior extends Player {
  _weaponOfPerson: Sword;
  constructor(
    alive: boolean,
    silence: boolean,
    debufflist: any[],
    kdlist: any[],
    rpgClass: string,
    name: string,
    healthPoints: number,
    weaponOfPerson: Weapon,
    strength: number,
    agility: number,
    intelligence: number,
  ) {
    super(alive, silence, debufflist, kdlist, rpgClass, name, healthPoints,weaponOfPerson, strength, agility, intelligence);
  }
  private blowOfJustice(opp: Player): void {
    // +30% к дефолт атаке. кд 2 раунда
    const damageGiven = Math.round(
      this._strength * this._weaponOfPerson._valueOfDamage * solveCritChance(this._weaponOfPerson._chanceOfCrit) * 1.3,
    );
    console.log(`${this._name} Использовал Blow of justice и атаковал мечом ${this._weaponOfPerson._name}`);
    opp.takeDamage(damageGiven)
  }
  private defaultAttack(opp: Player): void {
    const damageGiven =
      this._strength * this._weaponOfPerson._valueOfDamage * solveCritChance(this._weaponOfPerson._chanceOfCrit);
    console.log(`${this._name} атаковал мечом ${this._weaponOfPerson._name}`);
    opp.takeDamage(damageGiven)
  }

  public attack(opp: Player): void {
    if (this._alive && !this._silence) {
        if (this._kdlist[0] <= 0) { // атака маг стрелами
            this.reloadCooldown()
            this._kdlist[0] = 2;
            this.magicArrows(opp);
      } else  if (this._kdlist[1]<= 0){ // blowofjustice
            this.reloadCooldown()
            this._kdlist[1] = 3;
            this.blowOfJustice(opp)
      } else {
        this.reloadCooldown()
        this.defaultAttack(opp);
      }
    } else if (this._alive && this._silence) {
        this.reloadCooldown()
        this._silence = !this._silence;
    }
  }



//   public attack(kd: number): [number, number, string] {
//     let newkd: number;
//     if (this._alive && !this._silence) {
//       if (kd > 0) {
//         newkd = kd--;
//         return [newkd, this.defaultAttack(), ''];
//       } else {
//         newkd = 3;
//         return [newkd, this.blowOfJustice(), ''];
//       }
//     } else if (this._alive && this._silence) {
//       newkd = kd--;
//       this._silence = !this._silence;
//       return [newkd, null, ''];
//     } else {
//       return [null, null, ''];
//     }
//   }
}

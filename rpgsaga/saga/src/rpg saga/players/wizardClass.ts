import { Wand } from '../weapons/wandClass';
import { solveCritChance } from '../necessary/critChance';

import { Player } from './playerClass';

export class Wizard extends Player {
  _weaponOfPerson: Wand;
  constructor(
    alive: boolean,
    silence: boolean,
    debufflist: any[],
    kdlist: any[],
    rpgClass: string,
    name: string,
    healthPoints: number,
    weaponOfPerson: Wand,
    strength: number,
    agility: number,
    intelligence: number,
  ) {
    super(alive, silence, debufflist, kdlist, rpgClass, name, healthPoints,weaponOfPerson, strength, agility, intelligence);
  }

  private defaultAttack(opp: Player): void {
    const damageGiven =
      this._intelligence * this._weaponOfPerson._valueOfDamage * solveCritChance(this._weaponOfPerson._chanceOfCrit);
    console.log(`${this._name} выстрелил сгустком магии из ${this._weaponOfPerson._name}`);
    opp.takeDamage(damageGiven)
  }
  private hahaTrolled(opp: Player): void {
    console.log(`${this._name} обезмолвил противника`);
    opp._silence = true;
  }
  public attack(opp: Player): void {
    if (this._alive && !this._silence) {
      if (this._kdlist[0] <= 0) { // атака маг стрелами
        this.reloadCooldown()
        this._kdlist[0] = 2;
        this.magicArrows(opp);
      } else  if (this._kdlist[1]<= 0){ // nalozhit' silence
        this.reloadCooldown()
        this._kdlist[1] = 3;
        this.hahaTrolled(opp)
      } else {
        this.reloadCooldown()
        this.defaultAttack(opp)
      }
    } else if (this._alive && this._silence) {
        this.reloadCooldown()
        this._silence = !this._silence;
    } 
  }
}

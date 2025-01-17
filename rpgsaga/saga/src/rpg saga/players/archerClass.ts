import { Sword } from '../weapons/swordClass';
import { solveCritChance } from '../necessary/critChance';

import { Player } from './playerClass';
import { Bow } from '../weapons/bowClass';

export class Archer extends Player {
    _weaponOfPerson: Bow;
  constructor(
    alive: boolean,
    silence: boolean,
    debufflist: any[],
    kdlist: any[],
    rpgClass: string,
    name: string,
    healthPoints: number,
    weaponOfPerson: Bow,
    strength: number,
    agility: number,
    intelligence: number,
  ) {
    super(alive, silence, debufflist, kdlist, rpgClass, name, healthPoints,weaponOfPerson, strength, agility, intelligence);
  }
  private powerShot(opp: Player): void {
    // наносит дамаг +15%
    const damageGiven = Math.round(
      1.15*this._agility * this._weaponOfPerson._valueOfDamage * solveCritChance(this._weaponOfPerson._chanceOfCrit),
    );
    console.log(
      `${this._name} Использовал усиленный выстрел из ${this._weaponOfPerson._name}`,
    );
    opp.takeDamage(damageGiven)
  }
  private defaultAttack(opp: Player): void {
    const damageGiven =
      this._agility * this._weaponOfPerson._valueOfDamage * solveCritChance(this._weaponOfPerson._chanceOfCrit);
    console.log(`${this._name} выстрелил из лука ${this._weaponOfPerson._name}`);
    opp.takeDamage(damageGiven)
  }
  public attack(opp: Player): void {
    if (this._alive && !this._silence) {
        if (this._kdlist[0] <= 0) { // атака маг стрелами
            this.reloadCooldown()
            this._kdlist[0] = 2;
            this.magicArrows(opp);
          } else  if (this._kdlist[1]<= 0){
            this.reloadCooldown()
            this._kdlist[1] = 3;
            this.powerShot(opp)
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

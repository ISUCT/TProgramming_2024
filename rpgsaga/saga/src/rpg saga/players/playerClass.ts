import { Weapon } from "../weapons/weaponClass";

export abstract class Player {
  _alive: boolean;
  _silence: boolean;
  _debufflist: any[];
  _kdlist: any[];
  _rpgClass: string;
  _name: string;
  _healthPoints: number;
  _weaponOfPerson: Weapon;
  _strength: number;
  _agility: number;
  _intelligence: number;
  constructor(
    alive: boolean,
    silence: boolean,
    debufflist = [],
    kdlist = [0,0],
    rpgClass: string,
    name: string,
    healthPoints: number,
    weaponOfPerson: Weapon,
    strength: number,
    agility: number,
    intelligence: number,
  ) {
    this._alive = alive;
    this._silence = silence;
    this._debufflist = debufflist;
    this._kdlist = kdlist;
    this._rpgClass = rpgClass;
    this._name = name;
    this._healthPoints = healthPoints;
    this._weaponOfPerson = weaponOfPerson;
    this._strength = strength;
    this._agility = agility;
    this._intelligence = intelligence;
  }
  public takeDamage(damage: number): void {

    if (damage == null) {
        console.log(`${this._name} не получал урона`);
      }  else {
        this._healthPoints = this._healthPoints - damage;
        console.log(`${this._name} впитал ${damage} урона.`);
      }
  }
  protected getPassiveDebuff(damage: number, time: number){
    if (damage > 0 && time > 0) {
        this._debufflist.push([damage, time])
        console.log(`${this._name} получил damage дебафф`)
    }
  }
  public getDamagedByPassive(){
    let damage = 0;
    for (let i = 0; i< this._debufflist.length; i++){
        if (this._debufflist[i][1] > 0 && this._debufflist[i][0] > 0) {
            damage += this._debufflist[i][0]
            this._debufflist[i][1]--;
        } else {
            this._debufflist[i][0] = 0;
            this._debufflist[i][1] = 0;
        }
    }
    if (damage>0){
        this._healthPoints -= damage;
        console.log(`${this._name} впитал ${damage} пассивного урона`)
    }
  }

  public checkLiveStatus(): void {
    if (this._healthPoints <= 0) {
      this._alive = false;
    } 
  }

  protected magicArrows(opp: Player): void{
        // наносит дамаг, и со следующего раунда наносит по 15 в течении нескольких раундов
    const damageGiven = Math.round(
        10*this._intelligence
    );
    console.log(`${this._name} использовал магические стрелы`);
    opp.takeDamage(damageGiven)
    opp.getPassiveDebuff(15, 5)
  }

  protected reloadCooldown(): void{
    for (let i = 0; i<this._kdlist.length; i++)
        this._kdlist[i]--
  }

  public set backHP(hp: number) {
    this._healthPoints = hp;
    return;
  }

  public playerRoundResults(): string {
    if (this._alive) {
      return `Персонаж ${this._name} выжил. У него ${this._healthPoints} хп`;
    } else {
      return `💀Персонаж ${this._name} умер.💀`;
    }
  }
  abstract attack(opp: Player): void;
}

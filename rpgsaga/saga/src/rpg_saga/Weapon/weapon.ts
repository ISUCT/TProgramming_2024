// import { Character } from "./character";

export class Weapon {
  weaponName: string;
  damage: number;
  constructor(weaponName: string, damage: number) {
    this.weaponName = weaponName;
    this.damage = damage;
  }
}

export const ArcherArsenal: Weapon[] = [
  new Weapon('Лук', 10),
  new Weapon('Супер Лук', 12),
  new Weapon('Супер Лук2', 11),
  new Weapon('Супер Лук3', 14),
  new Weapon('Супер Лук4', 16),
];

export const WarriorArsenal: Weapon[] = [
  new Weapon('Sword', 15),
  new Weapon('Knife', 14),
  new Weapon('Pike', 17),
  new Weapon('Halberd', 14),
  new Weapon('Spike', 11),
];

export const SorcererArsenal: Weapon[] = [
  new Weapon('11', 12),
  new Weapon('14', 20),
  new Weapon('16', 25),
  new Weapon('12', 18),
  new Weapon('Stuff', 5),
];

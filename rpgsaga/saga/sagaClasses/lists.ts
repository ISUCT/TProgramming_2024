import { Weapon } from './weapon';

export enum DamageType {
  Physical = 'Physical',
  Magic = 'Magic',
}

export const Weapons = {
  sword: new Weapon('Sword', 25, DamageType.Physical),
  magicStaff: new Weapon('Magic Staff', 15, DamageType.Magic),
  axe: new Weapon('Axe', 30, DamageType.Physical),
  bow: new Weapon('Bow', 20, DamageType.Physical),
};

export const maleNames = [
  'Ichigo',
  'Renji',
  'Rukia',
  'Urahara',
  'Shinji',
  'Kensei',
  'Toshiro',
  'Kenpachi',
  'Yoruichi',
  'Byakuya',
];

export const femaleNames = [
  'Orihime',
  'Rukia',
  'Momo',
  'Soi Fon',
  'Yoruichi',
  'Nelliel',
  'Rangiku',
  'Tatsuki',
  'Ishida',
  'Haribel',
];

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
  'Aragorn',
  'Thorin',
  'Gimli',
  'Legolas',
  'Boromir',
  'Gandalf',
  'Faramir',
  'Elrond',
  'Eomer',
  'Galandriel',
];

export const femaleNames = [
  'Arwen',
  'Galadriel',
  'Eowyn',
  'Luthien',
  'Celebrian',
  'Nimrodel',
  'Melian',
  'Varda',
  'Yavanna',
  'Elbereth',
];

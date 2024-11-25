import { Weapon } from './weapon';

export enum DamageTypes {
  cutting = 'Режущий',
  crushing = 'Дробящий',
  stabbing = 'Колющий',
  magic = 'Магический',
}

// export const Spells: any {};

// export const Skills: any {};

export const Weapons = {
  rapier: new Weapon('Рапира', DamageTypes.stabbing, 15),
  magicStuff: new Weapon('Посох', DamageTypes.magic, 20),
  axe: new Weapon('Боевой топор', DamageTypes.cutting, 20),
  dryn: new Weapon('Дрын', DamageTypes.crushing, 30),
  bow: new Weapon('Лук', DamageTypes.stabbing, 30),
};

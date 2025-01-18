import { Character } from '../character';
import { Weapon } from '../Weapon/weapon';
import { SorcererSkills } from '../Mechanics/skills';

export class Sorcerer extends Character {
  constructor(characterName: string, weapon: Weapon) {
    const healthAmount = Math.floor(Math.random() * 51) + 50;
    super(characterName, 'Sorcerer', weapon, healthAmount, SorcererSkills);
  }
}

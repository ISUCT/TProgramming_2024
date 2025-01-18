import { Character } from '../character';
import { Weapon } from '../Weapon/weapon';
import { ArcherSkills } from '../Mechanics/skills';

export class Archer extends Character {
  constructor(characterName: string, weapon: Weapon) {
    const healthAmount = Math.floor(Math.random() * 51) + 70;
    super(characterName, 'Archer', weapon, healthAmount, ArcherSkills);
  }
}

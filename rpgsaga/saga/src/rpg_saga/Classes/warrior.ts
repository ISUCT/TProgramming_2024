import { Character } from '../character';
import { Weapon } from '../Weapon/weapon';
import { WarriorSkills } from '../Mechanics/skills';

export class Warrior extends Character {
  constructor(characterName: string, weapon: Weapon) {
    const healthAmount = Math.floor(Math.random() * 51) + 100;
    super(characterName, 'Warrior', weapon, healthAmount, WarriorSkills);
  }
}

import { Player } from './Player';
import { getRandomElement, getRandomValue } from './utils/RandomFunc';
import { abilities, Ability } from './utils/abilities';

export class Archer extends Player {
  private static archerNames = ['Sylvan', 'Theron', 'Lysander', 'Brynna', 'Eldrin', 'Elenara'];

  resetSpecificBuffs(): void {
    this.fireArrowBuff = false; // Сбрасываем баф огненных стрел
  }

  constructor() {
    const name = getRandomElement(Archer.archerNames);
    const maxHealth = getRandomValue(90, 110);
    const strength = getRandomValue(10, 15);
    const speed = getRandomValue(25, 50) / 100;
    super(name, maxHealth, strength, speed);

    this.abilities = [
        { ...abilities.find(a => a.name === 'Frozen Arrows'), usageLimit: 2 },
      ];
  }

  getClass(): string {
    return 'Archer';
  }

  getAbilities(): Ability[] {
    return [
      { ...abilities.find(a => a.name === 'Frozen Arrows'), usageLimit: 2 },
      abilities.find(a => a.name === 'Fire Arrows'),
    ];
  }
}

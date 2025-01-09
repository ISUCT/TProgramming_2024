import { IAbility } from '../Ability/Ability';
import { getRandomArrayElement, getRandomNumber } from '../utils/randomization';

import { Character } from './Сharacter';
import { ArcherFabric } from './FabricArcher';
import { WizardFabric } from './FabricMage';
import { KnightFabric } from './FabricKnight';

export class PlayerFabric {
  private archerFabric = new ArcherFabric();
  private knightFabric = new KnightFabric();
  private wizardFabric = new WizardFabric();

  public createPlayer(
    playerClass: string,
    playerHealth: number,
    playerStrength: number,
    playerSkills: IAbility[] | null = null,
  ): Character | undefined {
    const names: string[] = [
      'Эльдар',
      'Артур',
      'Гэндальф',
      'Вильямс',
      'Агатон',
      'Аполлон',
      'Артемида',
      'Зевс',
      'Персей',
      'Феникс',
      'Элита',
      'Ирида',
      'Медея',
      'Орион',
      'Рафаэль',
      'Себастиан',
      'Эмиль',
      'Аврора',
      'Веста',
      'Лилия',
      'Мира',
    ];
    switch (playerClass) {
      case 'Knight':
        return this.knightFabric.createKnight(names, playerHealth, playerStrength, playerSkills);
      case 'Archer':
        return this.archerFabric.createArcher(names, playerHealth, playerStrength, playerSkills);
      case 'Wizard':
        return this.wizardFabric.createWizard(names, playerHealth, playerStrength, playerSkills);
    }
  }

  createRandomPlayer(): Character {
    const playerFabric = new PlayerFabric();
    const classes: string[] = ['Knight', 'Archer', 'Wizard'];
    const playerClass: string = getRandomArrayElement(classes)!;
    const health: number = getRandomNumber(125, 150);
    const strength: number = getRandomNumber(10, 15);
    return playerFabric.createPlayer(playerClass, health, strength)!;
  }

  createRandomPlayers(playersCount: number): Character[] {
    const players: Character[] = [];
    for (let i = 0; i < playersCount; i++) {
      players.push(this.createRandomPlayer());
    }
    return players;
  }
}

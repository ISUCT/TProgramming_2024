import { Player } from '../../abstract/Player';
import { ISkill } from '../../skills/ISkill';
import { getRandomArrayElement, getRandomNumber } from '../../utils/randomization';
import { IWeapon } from '../../weapon/IWeapon';
import { WeaponFabric } from '../weaponsFabric/WeaponFabric';

import { ArcherFabric } from './ArcherFabric';
import { KnightFabric } from './KnightFabric';
import { WizardFabric } from './WizardFabric';

export class PlayerFabric {
  private weaponFabric = new WeaponFabric();
  private archerFabric = new ArcherFabric();
  private knightFabric = new KnightFabric();
  private wizardFabric = new WizardFabric();

  public createPlayer(
    playerClass: string,
    playerHealth: number,
    playerStrength: number,
    playerWeapon: IWeapon,
    playerSkills: ISkill[] | null = null,
  ): Player | undefined {
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
        return this.knightFabric.createKnight(names, playerHealth, playerStrength, playerWeapon, playerSkills);
      case 'Archer':
        return this.archerFabric.createArcher(names, playerHealth, playerStrength, playerWeapon, playerSkills);
      case 'Wizard':
        return this.wizardFabric.createWizard(names, playerHealth, playerStrength, playerWeapon, playerSkills);
    }
  }

  createRandomPlayer(): Player {
    const playerFabric = new PlayerFabric();
    const classes: string[] = ['Knight', 'Archer', 'Wizard'];
    const weapons: string[] = ['bow', 'sword', 'stick'];
    const playerClass: string = getRandomArrayElement(classes)!;
    const playerWeapon: IWeapon = this.weaponFabric.createRandomWeapon(getRandomArrayElement(weapons)!);
    const health: number = getRandomNumber(125, 150);
    const strength: number = getRandomNumber(10, 15);
    return playerFabric.createPlayer(playerClass, health, strength, playerWeapon)!;
  }

  createRandomPlayers(playersCount: number): Player[] {
    const players: Player[] = [];
    for (let i = 0; i < playersCount; i++) {
      players.push(this.createRandomPlayer());
    }
    return players;
  }
}

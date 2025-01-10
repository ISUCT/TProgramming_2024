import { IAbility } from '../Ability/Ability';
import { Character } from './Сharacter';
import { FactoryArcher } from './FactoryArcher';
import { FactoryMage as FactoryMage } from './FactoryMage';
import { FactoryKnight as FactoryKnight } from './FactoryKnight';
import { getRandomNumber, getRandomArrayElement} from '../utils/random/Random';

export class FactoryCharacter {
  private factoryArcher = new FactoryArcher();
  private factoryknight = new FactoryKnight();
  private factoryMage = new FactoryMage();

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
        return this.factoryknight.createKnight(names, playerHealth, playerStrength, playerSkills);
      case 'Archer':
        return this.factoryArcher.createArcher(names, playerHealth, playerStrength, playerSkills);
      case 'Mage':
        return this.factoryMage.createMage(names, playerHealth, playerStrength, playerSkills);
    }
  }

  createRandomPlayer(): Character {
    const playerFabric = new FactoryCharacter();
    const classes: string[] = ['Knight', 'Archer', 'Mage'];
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

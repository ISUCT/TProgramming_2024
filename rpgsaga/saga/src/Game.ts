import { FactryPlayer as FactryCharacter } from './Characters/FactoryCharacter';
import { Character } from './Characters/Сharacter';
import { Logger } from './utils/output/Logger';

export class Game {
  private factoryCharacter = new FactryCharacter();
  private _characters: Character[] = [];
  private logger: Logger;

  constructor(characterCount: number, character: Character | undefined = undefined, logger: Logger) {
    this._characters = this.factoryCharacter.createRandomPlayers(characterCount);
    this.logger = logger;
    if (character !== undefined) {
      this._characters.push(character);
    }
  }

  public get characters(): Character[] {
    return this._characters;
  }

  public async start() {
    this.logger.messageLog('Игра началась!');
    let listOfCharacters = 'Список участников: \n\n';
    listOfCharacters += this._characters.map(character => `(${character.className}) ${character.name}`).join('\n\n');
    this.logger.messageLog(listOfCharacters);
    await this.tournament(this._characters);
    this.logger.messageLog(`Победитель: (${this._characters[0].className}) ${this._characters[0].name}`);
  }

  public async tournament(characters: Character[]): Promise<Character> {
    if (characters.length === 1) {
      return characters[0];
    }

    const nextRoundCharacters: Character[] = [];
    for (let i = 0; i < characters.length; i += 2) {
      const character1 = characters[i];
      const character2 = characters[i + 1];
      const winner = await this.battle([character1, character2]);
      nextRoundCharacters.push(winner);
      character1.reset();
      character2.reset();
    }

    return this.tournament(nextRoundCharacters);
  }

  public async battle(fighters: Character[]): Promise<Character> {
    this.logger.messageLog(`(${fighters[0].name}) vs (${fighters[1].name})`);

    let turn = 0;

    while (fighters[0].health > 0 && fighters[1].health > 0) {
      const attackerIndex = turn % 2;
      const defenderIndex = (turn + 1) % 2;
      const attacker = fighters[attackerIndex];
      const defender = fighters[defenderIndex];

      if (defender.health > 0) {
        if (attacker.countOfSkipingTurns === 0) {
          this.logger.attackLog(attacker, defender, attacker.attack(defender));
        } else {
          attacker.attack(defender);
          this.logger.skipTurnLog(attacker, defender);
        }

        if (defender.health > 0) {
          this.logger.deathLog(defender);
          break;
        }
      }

      if (Math.random() < 0.4 && attacker.health > 0 && defender.health > 0) {
        attacker.choseAbility();
        if (attacker.currentAbility!.usageCount! > 0) {
          attacker.useAbility(defender);
          this.logger.skillLog(attacker, defender);
        }
      }

      await this.delay(2);
      turn++;
    }

    this.updateCharactersArray();
    return fighters.find(character => character.health > 0)!;
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  private updateCharactersArray() {
    this._characters = this._characters.filter(character => character.health > 0);
  }
}

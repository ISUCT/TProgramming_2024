import { Hero } from './hero';
import { HeroFactory } from './Factories/HeroFactory';
import { Logger } from './Logger';

export class Game {
  private heroFactory = new HeroFactory();
  private _heroes: Hero[] = [];
  private logger: Logger;

  constructor(heroCount: number, logger: Logger) {
    this._heroes = this.heroFactory.createRandomHeroes(heroCount);
    this.logger = logger;
  }

  public get heroes(): Hero[] {
    return this._heroes;
  }

  public async start() {
    this.logger.messageLog('Игра началась!');
    let listOfHeroes = 'Список участников: \n\n';
    listOfHeroes += this._heroes.map(hero => `(${hero.getClassName}) ${hero.getName}`).join('\n\n');
    this.logger.messageLog(listOfHeroes);
    await this.tournament(this._heroes);
    this.logger.messageLog(`Победитель: (${this._heroes[0].getClassName}) ${this._heroes[0].getName}`);
  }

  public async tournament(heroes: Hero[]): Promise<Hero> {
    if (heroes.length === 1) {
      return heroes[0];
    }

    const nextRoundHeroes: Hero[] = [];
    for (let i = 0; i < heroes.length; i += 2) {
      const hero1 = heroes[i];
      const hero2 = heroes[i + 1];
      const winner = await this.battle([hero1, hero2]);
      nextRoundHeroes.push(winner);
      hero1.reset();
      hero2.reset();
    }

    return this.tournament(nextRoundHeroes);
  }

  public async battle(fighters: Hero[]): Promise<Hero> {
    this.logger.messageLog(`(${fighters[0].getName}) vs (${fighters[1].getName})`);

    let turn = 0;

    while (fighters[0].getHealth > 0 && fighters[1].getHealth > 0) {
      const attackerIndex = turn % 2;
      const defenderIndex = (turn + 1) % 2;
      const attacker = fighters[attackerIndex];
      const defender = fighters[defenderIndex];

      if (defender.getIsAlive) {
        if (attacker.getSkipTurns === 0) {
          this.logger.attackLog(attacker, defender, attacker.attack(defender));
        } else {
          attacker.attack(defender);
          this.logger.skipTurnLog(attacker, defender);
        }

        if (!defender.getIsAlive) {
          this.logger.deathLog(defender);
          break;
        }
      }

      if (Math.random() < 0.4 && attacker.getIsAlive && defender.getIsAlive) {
        attacker.choseAbility();
        if (attacker.getCurrentAbility!.usageCount! > 0) {
          attacker.useAbility(defender);
          this.logger.abilityLog(attacker, defender);
        }
      }

      await this.delay(2);
      turn++;
    }

    this.updateHeroesArray();
    return fighters.find(hero => hero.getHealth > 0)!;
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  private updateHeroesArray() {
    this._heroes = this._heroes.filter(hero => hero.getIsAlive);
  }
}

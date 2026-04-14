import { Hero } from '../hero';
import { Ability } from '../ability';
import { randomArrayElement } from '../Functions/randomArrayElement';
import { randomNumber } from '../Functions/randomNumber';

import { ArcherFactory } from '../Factories/ArcherFactory';
import { KnightFactory } from '../Factories/KnightFactory';
import { WizardFactory } from '../Factories/WizardFactory';

export class HeroFactory {
  private archerFactory = new ArcherFactory();
  private knightFactory = new KnightFactory();
  private wizardFactory = new WizardFactory();

  public createHero(
    heroClass: string,
    heroHealth: number,
    heroStrength: number,
    heroAbilities: Ability[] | null = null,
  ): Hero | undefined {
    const names: string[] = [
      'Абрамс',
      'Бибоп',
      'Калико',
      'Динамо',
      'Фатом',
      'Серый Коготь',
      'Пелена',
      'Инфернус',
      'Лоза',
      'Кельвин',
      'Хлыст',
      'Мираж',
      'Парадокс',
      'Карман',
      'Заточка',
      'Виндикта',
      'Вязкус',
      'Дозорный',
      'Фантом',
      'Семь',
      'Ямато',
    ];
    switch (heroClass) {
      case 'Knight':
        return this.knightFactory.createKnight(names, heroHealth, heroStrength, heroAbilities);
      case 'Archer':
        return this.archerFactory.createArcher(names, heroHealth, heroStrength, heroAbilities);
      case 'Wizard':
        return this.wizardFactory.createWizard(names, heroHealth, heroStrength, heroAbilities);
    }
  }

  createRandomHero(): Hero {
    const heroFactory = new HeroFactory();
    const classes: string[] = ['Knight', 'Archer', 'Wizard'];
    const heroClass: string = randomArrayElement(classes)!;
    const health: number = randomNumber(125, 150);
    const strength: number = randomNumber(10, 15);
    return heroFactory.createHero(heroClass, health, strength)!;
  }

  createRandomHeroes(heroesCount: number): Hero[] {
    const heroes: Hero[] = [];
    for (let i = 0; i < heroesCount; i++) {
      heroes.push(this.createRandomHero());
    }
    return heroes;
  }
}

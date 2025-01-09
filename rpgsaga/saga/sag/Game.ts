import { Hero } from './Hero';
import { Logger } from './Logger';
import { Knight } from './Knight';
import { Archer } from './Archer';
import { Mage } from './Mage';

export class Game {
    private heroes: Hero[];
    private round: number = 1;

    constructor(heroes: Hero[]) {
        if (heroes.length % 2 !== 0) {
            throw new Error('Количество героев должно быть чётным.');
        }
        this.heroes = heroes;
    }

    start(): void {
        while (this.heroes.length > 1) {
            Logger.log(`Кон ${this.round}`);
            this.fight();
            this.round++;
        }

        if (this.heroes.length === 1) {
            Logger.log(`Победитель: ${this.heroes[0].getName()}`);
        } else {
            Logger.log(`На поле битвы не осталось выживших.`);
        }
    }

    private fight(): void {
        const shuffledHeroes = this.shuffleArray([...this.heroes]); 
        const pairs = this.createPairs(shuffledHeroes);

        for (const [hero1, hero2] of pairs) {
            this.battle(hero1, hero2);
        }

        this.heroes = this.heroes.filter(hero => hero.isAlive());

        this.heroes.forEach(hero => hero.resetAbilities());
    }

    private battle(hero1: Hero, hero2: Hero): void {
        Logger.log(`(${hero1.getClassName()}) ${hero1.getName()} vs (${hero2.getClassName()}) ${hero2.getName()}`);

        while (hero1.isAlive() && hero2.isAlive()) {
            
            if (!hero2.isCharmed()) {
                this.turn(hero1, hero2);
            } else {
                Logger.log(`(${hero2.getClassName()}) ${hero2.getName()} стоит и страдает.`);
                hero2.resetCharm();
            }

            if (hero1 instanceof Archer) {
                hero1.applyFireArrowsDamage();
            }

            if (!hero2.isAlive()) {
                Logger.log(`(${hero2.getClassName()}) ${hero2.getName()} помер`);
                break;
            }

            if (!hero1.isCharmed()) {
                this.turn(hero2, hero1);
            } else {
                Logger.log(`(${hero1.getClassName()}) ${hero1.getName()} стоит и страдает.`);
                hero1.resetCharm();
            }

            if (hero2 instanceof Archer) {
                hero2.applyFireArrowsDamage();
            }

            if (!hero1.isAlive()) {
                Logger.log(`(${hero1.getClassName()}) ${hero1.getName()} помер`);
                break;
            }
        }
    }

    private turn(attacker: Hero, defender: Hero): void {
        if (attacker.isCharmed()) {
            attacker.skipTurn(); 
            return;
        }

        if (Math.random() < 0.5) {
            attacker.useAbility(defender);
        } else {
            attacker.attack(defender);
        }
    }

    private shuffleArray(array: Hero[]): Hero[] {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    private createPairs(array: Hero[]): [Hero, Hero][] {
        const pairs: [Hero, Hero][] = [];
        for (let i = 0; i < array.length; i += 2) {
            if (i + 1 < array.length) {
                pairs.push([array[i], array[i + 1]]);
            }
        }
        return pairs;
    }
}
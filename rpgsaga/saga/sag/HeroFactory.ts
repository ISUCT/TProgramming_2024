import { Hero } from './Hero';
import { Knight } from './Knight';
import { Archer } from './Archer';
import { Mage } from './Mage';

export class HeroFactory {
    static createHero(type: string, health: number, strength: number, name: string): Hero {
        switch (type) {
            case 'Рыцарь':
                return new Knight(health, strength, name);
            case 'Лучник':
                return new Archer(health, strength, name);
            case 'Маг':
                return new Mage(health, strength, name);
            default:
                throw new Error('Неизвестный тип героя');
        }
    }

    static createRandomHeroes(count: number): Hero[] {
        const names = ['Артём', 'Егор', 'Лёня', 'Миша', 'Лёша', 'Максим', 'Влад', 'Саша', 'Рустам', 'Данила', 'Руслан'];
        const types = ['Рыцарь', 'Лучник', 'Маг'];
        const heroes: Hero[] = [];
        const usedNames: string[] = [];

        for (let i = 0; i < count; i++) {
            const type = types[Math.floor(Math.random() * types.length)];
            const health = Math.floor(Math.random() * 100) + 50;
            const strength = Math.floor(Math.random() * 20) + 10;
            let name = names[Math.floor(Math.random() * names.length)];

            while (usedNames.includes(name)) {
                name = names[Math.floor(Math.random() * names.length)];
            }
            usedNames.push(name);

            heroes.push(HeroFactory.createHero(type, health, strength, name));
        }

        return heroes;
    }
}
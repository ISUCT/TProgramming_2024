import { Player } from './laba3CreatingPlayer';
import { Mage } from './classes/laba3Mage';
import { Knight } from './classes/laba3Knight';
import { Archer } from './classes/laba3Archer';

export class HeroGeneration {
  static Herocreate(type: string, name: string, strength: number, health: number): Player {
    // Проверка и корректировка значений силы и здоровья
    switch (type) {
      case 'Knight':
        strength = Math.max(20, Math.min(100, strength));
        health = Math.max(80, Math.min(200, health));
        return new Knight(name, strength, health);
      case 'Mage':
        strength = Math.max(10, Math.min(50, strength));
        health = Math.max(50, Math.min(150, health));
        return new Mage(name, strength, health);
      case 'Archer':
        strength = Math.max(15, Math.min(70, strength));
        health = Math.max(60, Math.min(180, health));
        return new Archer(name, strength, health);
      default:
        throw new Error('Unknown hero type');
    }
  }

  static createRandomHeroes(count: number): Player[] {
    const heroes: Player[] = [];
    const types = ['Knight', 'Mage', 'Archer'];
    for (let i = 0; i < count; i++) {
      const type = types[Math.floor(Math.random() * types.length)];
      const name = `Hero${i + 1}`;
      let strength: number;
      let health: number;

      // Генерация случайных значений в пределах допустимых для каждого класса
      switch (type) {
        case 'Knight':
          strength = Math.floor(Math.random() * 81) + 20; // 20-100
          health = Math.floor(Math.random() * 121) + 80; // 80-200
          break;
        case 'Mage':
          strength = Math.floor(Math.random() * 41) + 10; // 10-50
          health = Math.floor(Math.random() * 101) + 50; // 50-150
          break;
        case 'Archer':
          strength = Math.floor(Math.random() * 56) + 15; // 15-70
          health = Math.floor(Math.random() * 121) + 60; // 60-180
          break;
        default:
          throw new Error('Unknown hero type');
      }

      heroes.push(this.Herocreate(type, name, strength, health));
    }
    return heroes;
  }
}
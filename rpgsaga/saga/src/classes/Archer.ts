import { Hero } from "../abstract/Hero";

export class Archer extends Hero {
  private fireArrowUsed: boolean = false;

  constructor(name: string, health: number, power: number) {
    super(name, health, power);
  }

  useAbility() {
    if (this.fireArrowUsed) return;
    console.log(`${this.name} использует Огненные стрелы!`);
    this.fireArrowUsed = true;
  }

  takeDamage(damage: number) {
    if (this.fireArrowUsed) {
      console.log(`${this.name} наносит дополнительный урон огненными стрелами!`);
      damage += 2; // Дополнительный урон
    }
    this.health -= damage;
    console.log(`${this.name} получил урон: ${damage}. Осталось здоровья: ${this.health}`);
    if (this.health <= 0) {
      this.isAlive = false;
      console.log(`${this.name} погибает!`);
    }
  }
}

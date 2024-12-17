import { Hero } from "../abstract/Hero";

export class Mage extends Hero {
  private isUnderSpell: boolean = false;

  constructor(name: string, health: number, power: number) {
    super(name, health, power);
  }

  useAbility() {
    console.log(`${this.name} использует Заворожение! Противник пропускает ход.`);
    this.isUnderSpell = true;
  }

  takeDamage(damage: number) {
    if (this.isUnderSpell) {
      this.isUnderSpell = false;
      console.log(`${this.name} пропускает ход, поскольку он под завораживающим эффектом.`);
      return; // Урон игнорируется
    }
    this.health -= damage;
    console.log(`${this.name} получил урон: ${damage}. Осталось здоровья: ${this.health}`);
    if (this.health <= 0) {
      this.isAlive = false;
      console.log(`${this.name} погибает!`);
    }
  }
}

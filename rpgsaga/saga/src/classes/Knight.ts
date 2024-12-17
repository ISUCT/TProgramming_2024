import { Hero } from "../abstract/Hero";

export class Knight extends Hero {
  private revengeStrikeUsed: boolean = false;

  constructor(name: string, health: number, power: number) {
    super(name, health, power);
  }

  useAbility() {
    if (this.revengeStrikeUsed) return;
    console.log(`${this.name} использует Удар возмездия!`);
    this.revengeStrikeUsed = true;
  }

  takeDamage(damage: number) {
    if (this.revengeStrikeUsed) {
      damage += damage * 0.3; // Урон увеличивается на 30%
    }
    this.health -= damage;
    console.log(`${this.name} получил урон: ${damage}. Осталось здоровья: ${this.health}`);
    if (this.health <= 0) {
      this.isAlive = false;
      console.log(`${this.name} погибает!`);
    }
  }
}

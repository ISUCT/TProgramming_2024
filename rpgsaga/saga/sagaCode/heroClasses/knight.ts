import { Player } from "../playerClass/player";
import { Weapon } from "../weapon";
import { Effect } from "../effectOfDamage/effect";
import { randomNumber } from "../randomizer";

export class knight extends Player {
    constructor(name:string,health:number,weapon:Weapon,statusEffect: boolean) {
        super(name, health, weapon, statusEffect);
    }

    public attack(opponent: Player): string {
        let damage = this.weapon.damageAmount;
        const isCritical = this.criticalHit();
        if (this.isAlive) {
            if (isCritical) {
                damage = Math.ceil(damage * 1.3); 
                console.log(`${this.name} наносит критический удар!`);
            }
            opponent.damaged(damage);
          return `(${this.name}) наносит урон ${damage} противнику (${opponent.name}) ${opponent.name}`;
        } 
      }

        private criticalHit(): boolean {
        const chance = 5; 
        return randomNumber(1, 10) <= chance;
    }

      public useHealEffect() {
        if (this.statusEffect) {
            console.log(`${this.name} уже использовал способность лечения раннее!`);
            return;
        } else {
            const healAmount = 15;
            this.health += healAmount;
            console.log(`${this.name} использует способность лечения и восстанавливает ${healAmount} здоровья. Текущее здоровье: ${this.health}`);
            this.statusOfEffect = true;
        }

    }
}

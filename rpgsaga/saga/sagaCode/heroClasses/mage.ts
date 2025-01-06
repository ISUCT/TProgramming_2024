import { Effect } from "../effectOfDamage/effect";
import { Player } from "../playerClass/player";
import { Weapon } from "../weapon";

export class mage extends Player {
    constructor(name:string,health:number,weapon:Weapon, statusEffect: number) {
        super(name, health, weapon, statusEffect);
    }

    public attack(opponent: Player): string {
        if (this.isAlive) {
            opponent.damaged(this.weapon.damageAmount);
          return `(${this.name}) наносит урон ${this.weapon.damageAmount} противнику (${opponent.name}) ${opponent.name}`;
        } 
      }
      
    public useFireball(target: Player, effect: Effect) {
        if (this.statusEffect == 0) {
            console.log(`${this.name} уже использовал Fireball раннее`);
            return;
        } else {
        this.activesEffect = new Effect(effect.type, effect.damagePerTurn, effect.duration, target);
        console.log(`${this.name} использует ${this.activeEffect.type}`);
        effect.applyEffect(target);
        this.statusEffectDown();
        }
    }  

}
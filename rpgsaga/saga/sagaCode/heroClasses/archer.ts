import { Player } from "../playerClass/player";
import { Weapon } from "../weapon";
import { Effect } from "../effectOfDamage/effect";

export class Archer extends Player {
    constructor(name:string,health:number,weapon:Weapon, statusEffect: number) {
        super(name, health,weapon, statusEffect);
        
    }

    public attack(enemy: Player): string {
        if (this.isAlive) {
            enemy.damaged(this.weapon.damageAmount);
          return `(${this.name}) наносит урон ${this.weapon.damageAmount} противнику (${enemy.name}) ${enemy.name}`;
        } 
      }

      useArrowEffect(target: Player, effect: Effect) {
        if (this.statusEffect == 0) {
            console.log(`${this.name} уже использовал способность ранее!`);
            return;
        } else {
        this.activesEffect = new Effect(effect.type, effect.damagePerTurn, effect.duration, target);
        console.log(`${this.name} использует ${this.activeEffect.type}`);
        effect.applyEffect(target);
        this.statusEffectDown();
        }
      }

      }
    
      
    



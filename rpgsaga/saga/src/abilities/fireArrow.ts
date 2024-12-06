import { Ability } from './abilities';
import { Hero } from '../heroes/hero';
import { BurnEffect } from '../effects/burnEffect';

export class FireArrows extends Ability {
    damage = 5;
    effect = new BurnEffect;

    use(target: Hero) {
        console.log(`${target.constructor.name} поражен Огненной Стрелой!`);
        target.takeDamage(this.damage);
        this.effect.apply(target);
    }
}
import { Ability } from './abilities';
import { Hero } from '../heroes/hero';
import { BurnEffect } from '../effects/burnEffect';

export class FireArrows extends Ability {
    constructor() {
        super(5, new BurnEffect());
    }

    use(target: Hero) {
        console.log(`${target.constructor.name} поражен Ледяной Стрелой!`);
        target.takeDamage(this.damage);
        this.effect.apply(target);
    }
}
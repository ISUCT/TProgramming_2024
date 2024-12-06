import { Ability } from './abilities';
import { Hero } from '../heroes/hero';
import { BackfireEffect } from '../effects/backfireEffect';

export class Backfire extends Ability {
    constructor() {
        super(0, new BackfireEffect());
    }

    use(target: Hero) {
        console.log(`${target.constructor.name} подвергается Ворожению!`);
        this.effect.apply(target);
    }
}
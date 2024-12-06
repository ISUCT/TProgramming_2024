import { Ability } from './abilities';
import { Hero } from '../heroes/hero';
import { ExecutionEffect } from '../effects/executionEffect';

export class RetributionStrike extends Ability {
    damage = 0;
    effect = new ExecutionEffect;

    use(target: Hero) {
        console.log(`${target.constructor.name} подвергается Удару Возмездия!`);
        this.effect.apply(target);
    }
}
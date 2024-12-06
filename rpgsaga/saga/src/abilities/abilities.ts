import { Hero } from '../heroes/hero';
import { Effect } from '../effects/effects';

export abstract class Ability {
    damage: number;
    effect: Effect;

    constructor(damage: number, effect: Effect) {
        this.damage = damage;
        this.effect = effect;
    }

    abstract use(target: Hero): void;
}
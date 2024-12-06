import { Effect } from "./effects";
import { Hero } from "../heroes/hero";

export class BurnEffect extends Effect {
    apply(target: Hero) {
        console.log(`${target.constructor.name} поджигается!`);
        target.takeDamage(5);
    }
}
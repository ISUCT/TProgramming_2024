import { Effect } from "./effects";
import { Hero } from "../heroes/hero";

export class BackfireEffect extends Effect {
    apply(target: Hero) {
        console.log(`${target.constructor.name} будет использовать следующую способность на самом себе!`);
        target.nextAbilitySelf = true;
    }
}
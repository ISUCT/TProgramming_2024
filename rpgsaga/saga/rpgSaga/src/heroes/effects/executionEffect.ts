import { Effect } from "./effects";
import { Hero } from "../heroes/hero";

export class ExecutionEffect extends Effect {
    apply(target: Hero) {
        if (target.health <= target.health * 0.25) {
            console.log(`${target.constructor.name} казнен!`);
            target.health = 0;
        } else {
            console.log(`${target.constructor.name} не подлежит казни.`);
        }
    }
}
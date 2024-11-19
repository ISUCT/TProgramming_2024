import { Player } from "./Class_players/Player";
import { Warrior } from "./Class_players/Warrior";
import { Archer } from "./Class_players/Archer";
import { Mage } from "./Class_players/Mage";
import { Hit } from "./Class_hit";
export function fight(pers_1: Partial<Warrior & Archer & Mage>, pers_2: Partial<Warrior & Archer & Mage>) {
    let k: number = 0;
    while (true) {
        if (k % 2 == 0) {
            if (pers_1.stuuned_states == false) {
                const hit: Hit = pers_1.attack();
                pers_2.taking_damage(hit)
                console.log(`${pers_1.name} (${pers_1.role}, ${pers_1.health} hp) наносит урон ${hit.damage} противнику ${pers_2.name} (${pers_2.role}, ${pers_2.health} hp)`);
            } else {
                pers_1.stuuned_states = false;
                console.log(`${pers_1.name} (${pers_1.role} ${pers_1.health} hp) пропускает ход и выходит из оглушения`)
            }
            if (pers_2.health <= 0) {
                console.log(`${pers_2.name} (${pers_2.role}) погибает`)
                break
            }
        } else if (k % 2 == 1) {
            if (pers_2.stuuned_states == false) {
                const hit: Hit = pers_2.attack();
                pers_1.taking_damage(hit)
                console.log(`${pers_2.name} (${pers_2.role}, ${pers_2.health} hp) наносит урон ${hit.damage} противнику ${pers_1.name} (${pers_1.role}, ${pers_1.health} hp)`);
            } else {
                pers_2.stuuned_states = false;
                console.log(`${pers_2.name} (${pers_2.role} ${pers_2.health} hp) пропускает ход и выходит из оглушения`)
            }
            if (pers_1.health <= 0) {
                console.log(`${pers_1.name} (${pers_1.role}) погибает`)
                break
            }
        }
    k++; 
    }
}
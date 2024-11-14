import { Warrior } from "./Class_players/Warrior";
import { Archer } from "./Class_players/Archer";
import { Mage } from "./Class_players/Mage";
import { Weapon } from "./Weapon";
import { random_value_array } from "./Utils/random_v_arr";
import { random_weapon } from "./Utils/random_weapon";
import { Hit } from "./Class_players/Class_hit";
const arr_name: String[] = ["Ivan", "Dima", "Alex", "Jhon", "Sergey"];
export enum Wepon_damage {
    "Sword" = 10,
    "Bow" = 15,
}
const weapon_1 = new Weapon(random_weapon())
const pers_1 = new Warrior(random_value_array(arr_name), weapon_1, 100, 20)
const weapon_2 = new Weapon(random_weapon())
const pers_2 = new Archer(random_value_array(arr_name), weapon_2, 100, 20)
let k: number = 0
while (true) {
    if (k % 2 == 0) {
        let attacker: Warrior = pers_1;
        let defending: Archer = pers_2;
        if (attacker.stuuned_states == false) {
            const hit: Hit = attacker.attack();
            defending.taking_damage(hit)
            console.log(`${attacker.name} (${attacker.role}, ${attacker.health} hp) наносит урон ${hit.damage} противнику ${defending.name} (${defending.role}, ${defending.health} hp)`);
        } else {
            attacker.stuuned_states = false;
            console.log(`${attacker.name} (${attacker.role} ${attacker.health} hp) пропускает ход и выходит из оглушения`)
        }
        if (defending.health <= 0) {
            console.log(`${defending.name} (${defending.role}) погибает`)
            break
        } else {
            k++
        }
    } else {
        let attacker: Archer = pers_2;
        let defending: Warrior = pers_1;
        if (attacker.stuuned_states == false) {
            const hit: Hit = attacker.attack();
            defending.taking_damage(hit)
            console.log(`${attacker.name} (${attacker.role}, ${attacker.health} hp) наносит урон ${hit.damage} противнику ${defending.name} (${defending.role}, ${defending.health} hp)`);
        } else {
            attacker.stuuned_states = false;
            console.log(`${attacker.name} (${attacker.role} ${attacker.health} hp) пропускает ход и выходит из оглушения`)
        }
        if (defending.health <= 0) {
            console.log(`${defending.name} (${defending.role}) погибает`)
            break
        } else {
            k++
        }
    }
}
import { Player } from "./Classes_players/Player";
import { Hit } from "./Class_hit";
export function fight(pers_1: Player, pers_2: Player) {
    console.log(`${pers_1.role} '${pers_1.name}' VS ${pers_2.role} '${pers_2.name}'`);
    let count: number = 1
    while (true) {
        if (count % 2 != 0) {
            count = one_hit(count, pers_1, pers_2);
        } else {
            count = one_hit(count, pers_2, pers_1);
        }
        if (count == -1) {
            break;
        } else {
            count++;
        }
    }
}

export function one_hit(count: number, attacker: Player, defending: Player): number {
    console.log();
    console.log(`-------Ход ${count}-------`);
    console.log();
    console.log(`${attacker.role} '${attacker.name}' (${attacker.health} HP) атакует ${defending.role} '${defending.name}' (${defending.health} HP)`);
    attacker.activate_debaffs();
    if (attacker.health <= 0) {
        console.log(`${attacker.role} '${attacker.name}' умер`)
        return -1;
    }
    if (attacker.stuuned_states == false) {
        let attack: Hit = attacker.attack();
        console.log(`${attacker.role} '${attacker.name}' наносит ${attack.damage} оружием '${attacker.name_weapon}'`)
        console.log();
        defending.taking_damage(attack); 
        if (defending.health <= 0) {
            console.log(`${defending.role} '${defending.name}' умер`);
            return -1;
        }
    } else {
        attacker.stuuned_states = false;
        console.log(`${attacker.role} '${attacker.name}' пропускает ход`)
    }
    return count;
}
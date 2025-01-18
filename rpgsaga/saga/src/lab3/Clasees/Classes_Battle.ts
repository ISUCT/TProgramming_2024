import { Player } from "./Classes_players/Player";
import { Hit } from "./Class_hit";
import { create_player } from "../Utils/create_player";

export class battle{
    private _count_players: number;
    private _arr_players: (Player)[] = [];
    constructor(
        count_players: number
    ) {
        this._count_players = count_players;
        for (let i = 0; i < count_players; i++) {
            let player: Player = create_player()
            console.log(`Игрок номер ${i + 1}: ${player.view_info()}`)
            this._arr_players.push(player)
        }
    }

    public start_game() {
        let count: number = 0;
        while (this._arr_players.length != 1) {
            count++;
            console.log();
            console.log(`--------------Раунд номер ${count}--------------`);
            console.log();
            let winner: Player[] = [];
            for (let i = 0; i < this._count_players - 1; i += 2) {
                winner.push(this.fight(this._arr_players[i], this._arr_players[i + 1]))
            }
            if (this._count_players % 2 != 0) {
                winner.push(this._arr_players[this._count_players - 1])
            }
            this._arr_players = winner;
            this._count_players = this._arr_players.length;
            for (let player of this._arr_players) {
                player.clear_hero();
            }

        }
        console.log();
        console.log(`${this._arr_players[0].role_name()} - единственный выживший`);
    }

    public fight(pers_1: Player, pers_2: Player) {
        console.log();
        console.log(`${pers_1.role_name()} VS ${pers_2.role_name()}`);
        console.log();
        let count: number = 1;
        while (true) {
            if (count % 2 != 0) {
                count = this.one_hit(count, pers_1, pers_2);
            } else {
                count = this.one_hit(count, pers_2, pers_1);
            }
            if (count == -1) {
                if (pers_1.health <= 0) {
                    return pers_2;
                } else {
                    return pers_1;
                }
            } else {
                count++;
            }
        }
    }

    private one_hit(count: number, attacker: Player, defending: Player): number {
        console.log();
        console.log(`-------Ход ${count}-------`);
        console.log();
        attacker.activate_debaffs();
        if (attacker.health <= 0) {
            console.log(`${attacker.role} '${attacker.name}' умер`)
            return -1;
        }
        if (attacker.stuuned_states == false) {
            console.log(`${attacker.role} '${attacker.name}' (${attacker.health} HP) атакует ${defending.role} '${defending.name}' (${defending.health} HP)`);
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
            console.log(`${attacker.role} '${attacker.name}' (${attacker.health}) пропускает ход`)
            defending.activate_debaffs();
        }
        return count;
    }
}
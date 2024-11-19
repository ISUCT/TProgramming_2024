import { Wepon_damage } from "../output_lab3";
import { Player } from "../Class_players/Player";

export class Weapon{
    private _name: string;
    private _damage: number;
    private _type_damage: String;
    private _upgrade_ph_resist: [number, number];
    private _upgrade_mg_resist: [number, number];
    constructor(
        name: string,
        damage: number,
        type_damage: String,
        upgrade_ph_resist: [number, number],
        upgrade_mg_resist: [number, number],
    ) {
        this._name = name;
        this._damage = damage;
        this._type_damage = type_damage;
        this._upgrade_ph_resist = upgrade_ph_resist;
        this._upgrade_mg_resist = upgrade_mg_resist;
    }
    
    public get name(): String {
        return this._name;
    }

    public get damage(): number {
        return this._damage;
    }

    public get type_damage(): String {
        return this._type_damage;
    }

    public update_states(player: Player) {
        player.physical_resistance = (player.physical_resistance + this._upgrade_ph_resist[0]) * this._upgrade_ph_resist[1];
        player.magic_resistance = (player.magic_resistance + this._upgrade_mg_resist[0]) * this._upgrade_mg_resist[1];
    }
}
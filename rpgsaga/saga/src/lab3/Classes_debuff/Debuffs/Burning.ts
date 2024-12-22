import { Debuff } from "../Debuff";
import { damage_types } from "../../Utils/list_damage_types";
import { debuff_names } from "../../Utils/list_debuff";

export class Burning extends Debuff{
    constructor() {
        super(debuff_names.burning, 3, 3, 15, damage_types.mag, false);
    }
}
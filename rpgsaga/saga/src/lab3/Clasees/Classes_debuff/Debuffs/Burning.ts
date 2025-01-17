import { Debuff } from "../Debuff";
import { damage_types } from "../../../Enums/enum_damage_types";
import { debuff_names } from "../../../Enums/enum_debuff";

export class Burning extends Debuff{
    constructor() {
        super(debuff_names.burning, 3, 15, damage_types.mag, false);
    }
}
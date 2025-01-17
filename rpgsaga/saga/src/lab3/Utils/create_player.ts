import { Weapon } from "../Clasees/Classes_weapons/Weapon";
import { Elf_Bow } from "../Clasees/Classes_weapons/Weapons/Elf_Bow";
import { Paladin_Shield } from "../Clasees/Classes_weapons/Weapons/Paladin_Shield";
import { Staff_Santa_Claus } from "../Clasees/Classes_weapons/Weapons/Staff_Santa_Claus";
import { weapons_names } from "../Enums/enum_weapons";
import { random_weapon } from "../fun_random/random_weapon";


import { Player } from "../Clasees/Classes_players/Player";
import { Archer } from "../Clasees/Classes_players/Players/Archer";
import { Warrior } from "../Clasees/Classes_players/Players/Warrior";
import { Mage } from "../Clasees/Classes_players/Players/Mage";
import { role_names } from "../Enums/enum_roles";

import { random_name } from "../fun_random/random_name";
import { random_hero } from "../fun_random/random_hero";

export function create_weapon(): Weapon {
    const name_weapon: String = random_weapon(); 
    if (name_weapon == weapons_names.elf_bow) {
        return new Elf_Bow();
    } else if (name_weapon == weapons_names.paladin_sheild) {
        return new Paladin_Shield();
    } else if (name_weapon == weapons_names.staff_santa) {
        return new Staff_Santa_Claus();
    }
}
export function create_player(): Player {
    const weapon: Weapon = create_weapon();
    const role_player: String = random_hero();
    if (role_player == role_names.archer) {
        return new Archer(random_name(), weapon, 100);
    } else if (role_player == role_names.warrior) {
        return new Warrior(random_name(), weapon, 100);
    } else if (role_player == role_names.mage) {
        return new Mage(random_name(), weapon, 100); 
    }
}
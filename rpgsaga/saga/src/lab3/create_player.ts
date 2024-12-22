import { Weapon } from "./Classes_weapons/Weapon";
import { Elf_Bow } from "./Classes_weapons/Weapons/Elf_Bow";
import { Paladin_Shield } from "./Classes_weapons/Weapons/Paladin_Shield";
import { Staff_Santa_Claus } from "./Classes_weapons/Weapons/Staff_Santa_Claus";
import { weapons_names } from "./Utils/list_weapons";
import { random_weapon } from "./Utils/random_weapon";


import { Player } from "./Classes_players/Player";
import { Archer } from "./Classes_players/Players/Archer";
import { Warrior } from "./Classes_players/Players/Warrior";
import { Mage } from "./Classes_players/Players/Mage";
import { role_names } from "./Utils/list_roles";
import { random_hero } from "./Utils/random_hero";


import { random_value_array } from "./Utils/random_v_arr";

const arr_name: String[] = ["Ivan", "Dima", "Alex", "Jhon", "Sergey"];

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
        return new Archer(random_value_array(arr_name), weapon, 100);
    } else if (role_player == role_names.warrior) {
        return new Warrior(random_value_array(arr_name), weapon, 100);
    } else if (role_player == role_names.mage) {
        return new Mage(random_value_array(arr_name), weapon, 100); 
    }
}
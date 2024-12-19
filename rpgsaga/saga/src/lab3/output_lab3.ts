import { Warrior } from "./Classes_players/Players/Warrior";
import { Archer } from "./Classes_players/Players/Archer";
import { Mage } from "./Classes_players/Players/Mage";
import { Weapon } from "./Classes_weapons/Weapon";
import { random_value_array } from "./Utils/random_v_arr";
import { random_weapon } from "./Utils/random_weapon";
import { Paladin_Shield } from "./Classes_weapons/Weapons/Paladin_Shield";
import { Elf_Bow } from "./Classes_weapons/Weapons/Elf_Bow";
import { Staff_Santa_Claus } from "./Classes_weapons/Weapons/Staff_Santa_Claus";
const arr_name: String[] = ["Ivan", "Dima", "Alex", "Jhon", "Sergey"];
const weapon_1 = new Staff_Santa_Claus()
const pers_1 = new Mage(random_value_array(arr_name), weapon_1, 100)
console.log(pers_1)
// console.log(pers_1.magic_resistance)
// console.log(pers_1.physical_resistance)


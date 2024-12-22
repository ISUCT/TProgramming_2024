import { weapons_names } from "./list_weapons";

export function random_weapon(): string {
    const weapons = Object.values(weapons_names).filter(key => isNaN(Number(key)));
    const randomIndex = Math.floor(Math.random() * weapons.length);
    return weapons[randomIndex];
}


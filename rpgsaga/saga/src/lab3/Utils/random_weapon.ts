import {} from "../output_lab3";

export function random_weapon(): string {
    const weapons = Object.keys(Wepon_damage).filter(key => isNaN(Number(key)));
    const randomIndex = Math.floor(Math.random() * weapons.length);
    return weapons[randomIndex];
}
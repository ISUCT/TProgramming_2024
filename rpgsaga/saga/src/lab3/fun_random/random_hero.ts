import { role_names } from "../Enums/enum_roles";

export function random_hero() {
    const players = Object.values(role_names).filter(key => isNaN(Number(key)));
    const randomIndex = Math.floor(Math.random() * players.length);
    return players[randomIndex]
}

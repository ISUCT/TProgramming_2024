import { names } from "../Enums/enum_names";

export function random_name(): String {
    const all_names = Object.values(names).filter(key => isNaN(Number(key)));
    const randomIndex = Math.floor(Math.random() * all_names.length);
    return String(all_names[randomIndex])
}

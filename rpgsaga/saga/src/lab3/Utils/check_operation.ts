import { random_value_array } from "./random_v_arr";

export function check_operation(chance_trigger: number): boolean {
    const arr = new Array(100 - chance_trigger).fill(0);
    const ones = new Array(chance_trigger).fill(1);
    arr.push(...ones);
    const fact: number = random_value_array(arr);
    if (fact == 1) {
        return true;
    } else {
        return false;
    }
}
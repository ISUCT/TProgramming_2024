export function check_operation(chance_trigger: number): boolean {
    const value: number = Math.floor(Math.random() * 100) + 1
    if (value <= chance_trigger) {
        return true;
    } else {
        return false;
    }
}

// let all_sum: number = 0
// for (let j = 0; j < 1000; j++) {
//     let count: number = 0;
//     for (let i = 0; i < 100; i++) {
//         if (check_operation(20)) {
//             count++;
//         }
//     }
//     all_sum += count
// }
// console.log(all_sum / 1000)
export function solution(a: number, b: number, x: number): number {
    let result = Math.acos((Math.pow(x, 2) - Math.pow(b, 2))) / Math.asin((Math.pow(x, 2) - Math.pow(a, 2))) 
    return result
}

export function task_A(a: number, b: number, x_start: number, x_end: number, x_step: number): Array<number> {
    let list_of_answers = []
    for (let i = x_start; i < x_end; i += x_step) {
        list_of_answers.push(solution(a, b, i))
    } 
    return list_of_answers
}

export function task_B(a: number, b: number, list_of_x: Array<number>): Array<number> {
    let list_of_answers = []
    for (let i of list_of_x) {
        list_of_answers.push(solution(a, b, i))
    } 
    return list_of_answers
}

const a = 0.05
const b = 0.06
const x_start = 0.2 
const x_end = 0.95
const x_step = 0.15
const list_of_x = [0.15, 0.26, 0.37, 0.48, 0.56]


console.log("task A answers:")
console.log(task_A(a, b, x_start, x_end, x_step))
console.log("task B answers:")
console.log(task_B(a, b, list_of_x))

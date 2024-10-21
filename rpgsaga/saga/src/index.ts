export function solution(a: number, b: number, x: number): number {
    let res = ((Math.pow(a, x) - Math.pow(b, x)) / Math.log(a / b)) * Math.pow(a * b, 1/3)
    return res
}

export function task_A(a: number, b: number, x_str: number, x_end: number, x_stp: number): Array<number> {
    let answ = []
    for (let i = x_str; i < x_end; i += x_stp) {
        answ.push(solution(a, b, i))
    } 
    return answ
}

export function task_B(a: number, b: number, array_x: Array<number>): Array<number> {
    let answ = []
    for (let i of array_x) {
        answ.push(solution(a, b, i))
    } 
    return answ
}

const a = 0.4
const b = 0.8
const x_str = 3.2 
const x_end = 6.2
const x_stp = 0.6
const array_x = [4.48, 3.56, 2.78, 5.28, 3.21]


console.log("Karetina_Svetlana_lab_1_7")
console.log("Task A:")
console.log(task_A(a, b, x_str, x_end, x_stp))
console.log("Task B:")
console.log(task_B(a, b, array_x))

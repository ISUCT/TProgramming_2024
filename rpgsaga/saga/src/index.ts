console.log('Hello world');

//Вариант_21

let x_start = 0.11
let x_end = 0.36
let x_step = 0.05
let list_X = [0.2, 0.3, 0.38, 0.43, 0.57]

console.log("Хабибулина Алина 2/280")
console.log(death(0.1))
console.log(`Ответы к задаче A: ${task_A(x_start, x_end, x_step)}`)
console.log(`Ответы к задаче B: ${task_B(list_X)}`)

export function death(x: number) {
    let res = (Math.pow(Math.sin(x), 3) + Math.pow(Math.cos(x), 3)) * Math.log(x)
    return res
}

export function task_A(x_start: number, x_end: number, x_step: number) {
    let list_of_res = []
    for (let i = x_start; i <= x_end; i += x_step) {
        list_of_res.push(death(i))
    }
    return list_of_res
}

export function task_B(list_X: Array<number>) {
    let list_of_res = []
    for (let i of list_X) {
        list_of_res.push(death(i))
    }
    return list_of_res 
}




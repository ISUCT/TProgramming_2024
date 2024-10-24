import { taskA, taskB } from "./Laba1"

const a = 2
const b = 3
const x_start = 0.11 
const x_end = 0.36
const x_step = 0.05
const list_of_x = [0.08, 0.26, 0.35, 0.41, 0.53]

console.log(taskA(2, 3, 0.21, 0.16, 0.05))
console.log("Кочетов Максим группа 2/280 11 вариант")
console.log("Ответы для задачи А:")
console.log(taskA(a, b, x_start, x_end, x_step))
console.log("Ответы для задачи В:")
console.log(taskB(a, b, list_of_x))

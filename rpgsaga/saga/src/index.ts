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

console.log("Kochetov Danil 2/280")
console.log("laboratory work №1 option 10:")
console.log("task A answers:")
console.log(task_A(a, b, x_start, x_end, x_step))
console.log("task B answers:")
console.log(task_B(a, b, list_of_x))


class Table {
    private length: number;
    private width: number;
    private height: number;

    constructor(length: number, width: number, height: number) {
        this.length = length;
        this.width = width;
        this.height = height;
    }
 
    getDimensions(): string {
        return `Table dimensions: Length - ${this.length} sm, Width - ${this.width} sm, Height - ${this.height} sm`;
    }

    setDimensions(width: number, length: number, height: number): void {
        this.width = width;
        this.length = length;
        this.height = height;
    }

    tableCategory(): string {
        if (this.length >= 60 && this.length <= 100 && this.width >= 40 && this.width <= 60 && this.height >= 30 && this.height <= 70) {
            return "Small";
        } else if (this.length > 100 && this.length <= 180 && this.width > 60 && this.width <= 90 && this.height > 70 && this.height <= 80) {
            return "Medium";
        } else if (this.length > 180 && this.length <= 500 && this.width > 90 && this.width <= 300 && this.height > 80 && this.length <= 130) {
            return "Large";
        } else {
            return "Well, I do not know what kind of table you have there";
        }
    }

    isStandard(): boolean {
        if (this.length === 120 && this.width === 80 && this.height === 75) {
            return true
        }
        return false
    }
}


const table = new Table(120, 80, 75);
console.log("laboratory work №2")
console.log(table.getDimensions());
console.log(`Standard sizes: ${table.isStandard()}`);
console.log(`Table category: ${table.tableCategory()}`);


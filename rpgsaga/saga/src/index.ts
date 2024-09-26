const b = 2.5;
let x = 1.28
const nums = [1.1, 2.4, 3.6, 1.7, 3.9]

function solvetaskA(x: number, b: number):
number{
    let resA = Math.pow(1 + Math.pow(Math.sin(b), 3) + Math.pow(x, 3), 2 / (Math.pow(Math.pow(b, 3) + Math.pow(x, 3), 1/3)));
    return resA
}

while (x <= 3.28){
    const sol = solvetaskA(x, b);
    console.log("Задача А, при х: " + x + " результат = " + sol);
    x += 0.4
}

function solvetaskB(nums: number[], b: number):
number[] {
    let resB: number[] = [];
    for (let i of nums){
        const solut = resB.unshift(solvetaskA(i, b));
    }
    return resB;
}
console.log("Задача Б: " +solvetaskB(nums, b))

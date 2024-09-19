const a = 1.35
const b = 0.98
const xStart = 1.14
const xEnd = 3.28
const xStep = 0.4
const xArray = [1.1,2.4,3.6,1.7,3.9]

function taskA(xStart,xEnd,xStep){
    let count = 0
    for (let i = xStart; i < xEnd; i= i + xStep){
        count+=1
        console.log(calculateFunc(a,b,i))
    }
    return count
}
function taskB(array: number[]){
    let count = 0
    for (let i of array){
        count+=1
        console.log(calculateFunc(a,b,i))
    }
    return count
}
function calculateFunc (a:number,b:number,x:number): number {
        let topPart = Math.pow((a*x)+b,(1.0/3))
        let bottomPart = Math.pow(Math.log10(x),2)
        let y = topPart/bottomPart
        return y
}
taskA(xStart,xEnd,xStep)
taskB(xArray)

export {calculateFunc,taskA,taskB}
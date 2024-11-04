export function formula(x: number, a: number = 1.2 , b: number = 0.48, e: number = 2.71): number {
    return (Math.pow(b,3)+Math.pow(Math.sin((a*b)),2))/(Math.acos((x*b*x))+Math.pow(e,(-x/2)));
}

const xstart: number = 0.7;
const xend: number = 2.2;
const xarray: number[]=[0.25,0.36,0.56,0.94,1.28];
const step: number = 0.3;

export function taskA(xfirst: number , xlast: number , xdelta: number , a: number = 1.2 , b: number = 0.48, e: number = 2.71): number[] {
    const result: number[] = []; 
    for (let i: number = xfirst; i<xlast ; i+= xdelta){
        result.push(formula(i,a,b,e));
    }
    return result
}

export function taskB(list: number[] , a: number = 1.2 , b: number = 0.48, e: number = 2.71): number[] {
    const stack: number[] = [];
  for (const item of list) {
    stack.push(formula(item, a, b));
  }
  return stack;
}

console.log(taskA(xstart, xend, step));
console.log(taskB(xarray));
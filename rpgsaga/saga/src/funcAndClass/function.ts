//var 4
function result(x: number): number {
  const func = Math.pow((Math.abs(Math.pow(x, 2) - 2.5)), 1/4) + Math.pow((Math.log10(Math.pow(x, 2))), 1/3);
  return func; 
}

function taskA(x_start: number, x_end: number, x_d: number): number[] {
  const y = [];
  if (x_d === 0) {
    return [];
  } else if (x_d > 0) {
    for (let x = x_start; x <= x_end; x += x_d) {
      y.push(result(x));
    }
  } else {
    for (let x = x_start; x >= x_end; x += x_d) {
      y.push(result(x));
    }
  }
    return y;
}

let x_start: number = 1.25;
let x_end: number = 3.25; 
let x_d: number = 0.4;
console.log('Results of Task A for values:');
console.log(x_start, x_end, x_d);
console.log(taskA(x_start, x_end, x_d));




function taskB(values: number[]): number[]  {
  const y = [];
  for (const x of values) {
    y.push(result(x));
  }
  return y;
}

let x1: number = 1.84;
let x2: number = 2.71;
let x3: number = 3.81;
let x4: number = 4.56;
let x5: number = 5.62;
console.log("Results of Task B for values:");
console.log(x1, x2, x3, x4, x5);
console.log(taskB([x1, x2, x3, x4, x5]));

export {taskA, taskB};

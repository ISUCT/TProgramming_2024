function formula(x: number, a: number): number {
    if (Math.abs(x - 1) < 1e-6) {
      return NaN;
    }
    const result = Math.pow(a, (Math.pow(x, 2) - 1)) - Math.log10(Math.pow(x, 2) - 1) + Math.pow((Math.pow(x, 2) - 1), (1/3));
    return Math.fround(result * 1e12) / 1e12;
  }
  
  function taskA(a: number, xstart: number, xend: number, xstep: number): number[] {
    const y: number[] = [];
    for (let i = xstart; i <= xend; i += xstep) {
      y.push(formula(i, a));
    }
    return y;
  }
  
  function taskB(a: number, arr: number[]): number[] {
    const y: number[] = [];
    for (let i = 0; i < arr.length; i++) {
      y.push(formula(arr[i], a));
    }
    return y;
  }
  
  const a: number = 1.6;
  console.log("Задача А");
  let xstart: number = 1.2;
  let xend: number = 3.7;
  let xstep: number = 0.5;
  let yTaskA: number[] = taskA(a, xstart, xend, xstep);
  for (let i = 0; i < yTaskA.length; i++) {
    console.log(`y = ${yTaskA[i]}`);
  }
  
  console.log("Задача B");
  let arr: number[] = [1.28, 1.36, 2.47, 3.68, 4.56];
  let yTaskB: number[] = taskB(a, arr);
  for (let i = 0; i < yTaskB.length; i++) {
    console.log(`y = ${yTaskB[i]}`);
  }
  

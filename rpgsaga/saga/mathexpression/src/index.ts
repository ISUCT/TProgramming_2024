import { solveTaskA, solveTaskB } from "./function";

try {
  console.log(solveTaskA(1.28, 3.28, 0.4));
} catch (err) {
  console.error(err);
}

try {
  const xArr: number[] = [1.1, 2.4, 3.6, 1.7, 3.9];
  
  console.log(solveTaskB(xArr));
} catch (err) {
  console.error(err);
}

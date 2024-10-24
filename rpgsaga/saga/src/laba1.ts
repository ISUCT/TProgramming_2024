export function death(x: number): number {
    return (Math.pow(Math.sin(x), 3) + Math.pow(Math.cos(x), 3)) * Math.log(x);
}
  
export function taskA(xStarts: number, xEnds: number, xSteps: number): number[] {
    const listOfRes: number[] = [];
    for (let i = xStarts; i <= xEnds; i += xSteps) {
      listOfRes.push(death(i));
    }
    return listOfRes;
}
  
export function taskB(listsX: number[]): number[] {
    const listOfRes: number[] = [];
    for (const i of listsX) {
      listOfRes.push(death(i));
    }
    return listOfRes;
}
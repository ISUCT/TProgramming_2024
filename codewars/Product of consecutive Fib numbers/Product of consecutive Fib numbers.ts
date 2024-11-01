export const productFib = (prod:number): [number,number,boolean] => {
  let fibNums: number[] = [0, 1];
  let count = 2;
  
  while(true) {
    let prevNum = fibNums[count - 1];
    let nextNum = prevNum + fibNums[count - 2];
    
    if(nextNum * prevNum > prod) {
      return [prevNum, nextNum, false];
    }
    else if(nextNum * prevNum == prod) {
      return [prevNum, nextNum, true];
    }
    
    fibNums.push(nextNum);
    count++;
  }
}
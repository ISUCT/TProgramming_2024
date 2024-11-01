export const digitalRoot = (n:number):number => {
  let numStr: string = n.toString();
  let res: number = n;
  while(numStr.length > 1) {
    let temp = 0;
    for(let i = 0; i < numStr.length; i++) {
      temp += Number.parseInt(numStr[i]);
    }
    res = temp;
    numStr = temp.toString();
  }
  
  return res;
};
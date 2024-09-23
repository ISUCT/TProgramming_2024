export function sumPairs(ints: number[], s: number): [number, number] | void {  
    let pairs = new Map<number, number>();
    let minIndex: number = Number.MAX_SAFE_INTEGER;
    
    for(let i = 0; i < ints.length; i++) {
      let secondNum: number = s - ints[i];
      
      if(pairs.has(secondNum)) {
        return [secondNum, ints[i]];
      }
      
      pairs.set(ints[i], secondNum);
    }
    
    return undefined;
  }
function sumPairs(ints, s) {
    let seen = new Set(); 
    for (let num of ints) {
      let complement = s - num; 
  
      if (seen.has(complement)) {
        return [complement, num];
      }
  
      seen.add(num);
    }
  
    return undefined;
  }
  
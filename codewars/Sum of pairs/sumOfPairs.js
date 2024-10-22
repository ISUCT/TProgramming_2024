function sumPairs(ints, s) {
    const seen = new Set();
    
    for (let i = 0; i < ints.length; i++) {
      const current = ints[i];
      const complement = s - current;
      
      if (seen.has(complement)) {
        return [complement, current];
      }
      
      seen.add(current);
    }
    
    return null;
  }
 
console.log(sumPairs([4, 3, 2, 3, 4], 6)); 
console.log(sumPairs([0, 0, -2, 3], 2)); 
console.log(sumPairs([10, 5, 2, 3, 7, 5], 10));
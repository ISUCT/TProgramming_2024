function sumPairs(ints, s) {
  
  let seen = new Set(); 
  for (let i = 0; i < ints.length; i++) {
    let complement = s - ints[i]; 
    if (seen.has(complement)) {          
      return [complement, ints[i]];    
    }
    seen.add(ints[i]); 
  }
    return undefined;
  
}

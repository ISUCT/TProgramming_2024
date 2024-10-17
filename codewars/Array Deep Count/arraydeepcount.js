function deepCount(a){
    let count = 0;
    
    for (let i of a) {
      count += 1;
      if (Array.isArray(i)){
        count += deepCount(i);
      }
    } 
    return count;
  }
function deepCount(array) {
    let sum = 0;
  
    for (let i of array) {
      sum += 1;
      if (Array.isArray(i)) {
        sum += deepCount(i);
      }
    }
    return sum;
  } 
function deepCount(a) {
    let sumTotal = 0;
  
    for (let element of a) {
      sumTotal += 1;
      if (Array.isArray(element)) {
        sumTotal += deepCount(element);
      }
    }
  
    return sumTotal;
  }
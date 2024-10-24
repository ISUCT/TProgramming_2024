function mergeArrays(a, b) {
    let result = [];
    let i = 0;
    let j = 0;
  
    while (i < a.length || j < b.length) {
      if (i < a.length) result.push(a[i++]);
      if (j < b.length) result.push(b[j++]);
    }
  
    return result;
  }
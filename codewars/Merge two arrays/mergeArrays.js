function mergeArrays(a, b) {
    let mergedArray = [];
    let i = 0;
    let j = 0;
      
    while (i < a.length || j < b.length) {
        if (i < a.length) {
            mergedArray.push(a[i]);
            i += 1;
        }
        if (j < b.length) {
            mergedArray.push(b[j]);
            j += 1;
        }
    }
    return mergedArray;
  }
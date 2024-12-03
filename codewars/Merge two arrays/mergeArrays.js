function mergeArrays(a, b) {
    let maxLength = Math.max(a.length, b.length);
    let totalLength = maxLength * 2;
    let arraysToMerge = [a, b];
    let mergedResult = [];
  
    for (let i = 0; i < totalLength; i++) {
      let currentArrayIndex = i % 2;
      let currentElementIndex = Math.floor(i / 2);
      let value = arraysToMerge[currentArrayIndex][currentElementIndex];
      
      if (value !== undefined) {
        mergedResult.push(value);
      }
    }
  
    return mergedResult;
  }
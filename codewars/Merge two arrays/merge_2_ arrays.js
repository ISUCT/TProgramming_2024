function mergeArrays(a, b) {
    let resultLength = Math.max(a.length, b.length) * 2;
    let merge = [a, b];
    let result = [];
  
    for (let i = 0; i < resultLength; i++) {
      let value = merge[i % 2][Math.floor(i / 2)];
      if (value != undefined) result.push(value);
    }
  
    return result;
  }
function mergeArrays(a, b) {
    let result = [];
    while (a.length > 0 && b.length > 0) {
      result.push(a.shift());
      result.push(b.shift());
    }
    while (a.length > 0) {
      result.push(a.shift());
    }
    while (b.length > 0) {
      result.push(b.shift());
    }
    return result;
  }
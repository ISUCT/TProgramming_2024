function mergeArrays(a, b) {
    let lengthRes = Math.max(a.length, b.length) * 2;
    let merge = [a, b];
    let result = [];
    
    for (let i = 0; i < lengthRes; i++) {
      let value = merge[i % 2][Math.floor(i / 2)];
      if (value != undefined) result.push(value);
    }
    return result;
  }
  console.log(mergeArrays(["a", "b", "c", "d", "e"], [1, 2, 3, 4, 5]));
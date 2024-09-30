function moveZeros(arr) {
    let result = [];
    let c = 0;
    for (i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        result.push(arr[i]);
      } else {
        c++;
      }
    }
    while (c!=0) {
      result.push(0);
      c--;
    }
  return result;
  }
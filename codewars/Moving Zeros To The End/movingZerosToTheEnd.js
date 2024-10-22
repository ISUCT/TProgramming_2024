function moveZerosToEnd(array) {
    let nonZeroCount = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] !== 0) {
        array[nonZeroCount] = array[i];
        nonZeroCount++;
      }
    }
    for (let i = nonZeroCount; i < array.length; i++) {
      array[i] = 0;
    }
    return array;
  }
  console.log(moveZerosToEnd([0,1,2,0,3,0,4]));
function moveZeros(arr) {
    const zero = [];
    const arr2 = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
        zero.push(arr[i]);
      } else {
        arr2.push(arr[i]);
      }
    }
  
    for (let j = 0; j < zero.length; j++) {
      arr2.push(zero[j]);
    }
  
    return arr2;
  }
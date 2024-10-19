function moveZeros(arr) {
    let nonZeros = [];
    let zeros = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
        zeros.push(arr[i]);
      } else {
        nonZeros.push(arr[i]);
      }
    }
  
    return nonZeros.concat(zeros);
  }
  
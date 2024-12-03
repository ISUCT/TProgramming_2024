function moveZeros(arr) {
    const zeros = [];
    const nonZeros = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
        zeros.push(arr[i]);
      } else {
        nonZeros.push(arr[i]);
      }
    }
    for (let j = 0; j < zeros.length; j++) {
        nonZeros.push(zeros[j]);
      }
    
      return nonZeros;
    }
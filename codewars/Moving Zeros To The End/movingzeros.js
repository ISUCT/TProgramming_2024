function moveZeros(arr) {
    const zeros = [];
    const noZeros = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
        zeros.push(arr[i]);
      } else {
        noZeros.push(arr[i]);
      }
    }
    zeros.forEach(zero => noZeros.push(zero));
    return noZeros;
  } 
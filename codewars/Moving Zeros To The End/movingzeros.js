function moveZeros(arr) {
    let zeros = [];
    let others = [];
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
        zeros.push(arr[i]);
      } else {
        others.push(arr[i]);
        }
      }
      for (let j = 0; j < zeros.length; j++) {
      others.push(zeros[j]);
      }
  
    return others
  }
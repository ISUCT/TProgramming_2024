function moveZeros(arr) {
    let res = []
    let k = 0
    for (i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        res.push(arr[i])
      } else {
        k++
      }
    }
    
    while (k) {
      res.push(0)
      k--
    }
  return res
  }
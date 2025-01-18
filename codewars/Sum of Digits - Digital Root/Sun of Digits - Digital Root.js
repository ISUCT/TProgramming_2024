function digitalRoot(n) {
    if (n.toString().length == 1) {
      return n
    }
    let arr = n.toString().split('')
    let result = 0
    for (i=0;i<arr.length;i++){
      arr[i] = +arr[i] | 0
      result += arr[i]
    }
    return digitalRoot(result)
    
  }
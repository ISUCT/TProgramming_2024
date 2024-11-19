function deepCount(a){
    let result = 0
    const recursion = arr => {
      result += arr.length
      for (let i of arr) {
        if (Array.isArray(i) ) {
          recursion(i);
          }
      }
    }
    recursion(a)
    return result
  }
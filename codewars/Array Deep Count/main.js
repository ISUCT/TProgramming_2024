function deepCount(a) {
    let k = 0;
    const recursion = arr => {
      k += arr.length;
      for (let i of arr) {
        if (Array.isArray(i) ) {
          recursion(i);
        }
      }
    }
    recursion(a);
    return k;
  }
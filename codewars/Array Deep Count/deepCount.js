function deepCount(a) {
    let counter = 0
    const rec = array => {
      counter += array.length
      for (let i of array) {
        if (Array.isArray(i) ) {
          rec(i)
        }
      }
    }
    rec(a)
    return counter
  }

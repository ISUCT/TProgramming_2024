function mergeArrays(a, b) {
  let arr = []
  minLength = a.length > b.length ? b.length : a.length;
  for (let i = 0; i < minLength; i++) {
    arr.push(a[i]);
    arr.push(b[i]);
  }
  if (a.length > b.length) {
    for (let j = minLength; j < a.length; j++) {
      arr.push(a[j]);
      }
    } else {
        for (let j = minLength; j < b.length; j++) {
          arr.push(b[j]);
      }
    }
  return arr;
}
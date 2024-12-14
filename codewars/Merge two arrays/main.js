
function mergeArrays(a, b) {
    let res = [];
    while (a.length && b.length) {
        res.push(a.shift());
        res.push(b.shift());
      }
    if (a.length == 0) {
      for (i = 0; i < b.length; i++) {
        res.push(b[i]);
      }
    }
    if (b.length == 0) {
      for (i = 0; i < a.length; i++) {
        res.push(a[i]);
      }
    }
    return res;
  }

function digitalRoot(n) {
    let str = n.toString();
    let sum = 0;
  
    for (const char of str) {
      let num = parseInt(char);
      sum += num;
    }
    str = sum.toString();
    if (str.length > 1) {
      return digitalRoot(str);
    }
    return sum;
  } 
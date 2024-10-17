function digitalRoot(n) {
    let num = n.toString();
    let sum = 0;
    
    for (i = 0; i < num.length; i++) {
      sum += parseInt(num[i]);
    }
    
    if(sum > 9) {
    return digitalRoot(sum);
    }
    return sum;
  }
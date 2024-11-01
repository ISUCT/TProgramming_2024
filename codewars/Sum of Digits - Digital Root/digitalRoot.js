function digitalRoot(n) {
    let str = n.toString();
  
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
      sum += parseInt(str.charAt(i));
    }
  
    while (sum > 9) {
      let temp = 0;
      while (sum > 0) {
        temp += sum % 10;
        sum = Math.floor(sum / 10);
      }
      sum = temp;
    }
  
    return sum;
  }
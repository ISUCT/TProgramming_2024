function add(a, b) {
    let result = "";
    let carry = 0;
  
    while (a.length < b.length) a = "0" + a;
    while (b.length < a.length) b = "0" + b;
  
    for (let i = a.length - 1; i >= 0; i--) {
      let sum = +a[i] + +b[i] + carry;
      result = (sum % 10) + result;
      carry = Math.floor(sum / 10);
    }
  
    if (carry) result = carry + result;
  
    return result;
  }
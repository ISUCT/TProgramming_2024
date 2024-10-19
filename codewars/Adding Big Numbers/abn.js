function add(a, b) {
    let result = []; 
    let carry = 0; 
    let i = a.length - 1; 
    let j = b.length - 1; 
  
    while (i >= 0 || j >= 0 || carry > 0) {
      let digitA = i >= 0 ? parseInt(a[i]) : 0;
      let digitB = j >= 0 ? parseInt(b[j]) : 0;
  
      let sum = digitA + digitB + carry;
  
      let newDigit = sum % 10;
      carry = Math.floor(sum / 10);
  
      result.unshift(newDigit);
  
      i--;
      j--;
    }
  
    return result.join('');
  }
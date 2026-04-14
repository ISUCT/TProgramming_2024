function add(a, b) {
    let result = '';
    let carry = 0;
    let maxLength = Math.max(a.length, b.length);
   
    a = a.padStart(maxLength, '0');
    b = b.padStart(maxLength, '0');
   
    for (let i = maxLength - 1; i >= 0; i--) {
     let sum = parseInt(a[i]) + parseInt(b[i]) + carry;
     carry = Math.floor(sum / 10);
     result = (sum % 10) + result;
    }
   
    if (carry) {
     result = carry + result;
    }
   
    return result;
   }
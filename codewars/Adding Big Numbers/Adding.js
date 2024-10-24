function add(a, b) {
    let maxLength = Math.max(a.length, b.length);
    let carry = 0;
    let result = "";

    for (let i = 0; i < maxLength || carry; i++) {
      let digitA = parseInt(a[a.length - 1 - i]) || 0;
      let digitB = parseInt(b[b.length - 1 - i]) || 0;
      let sum = digitA + digitB + carry;
      carry = Math.floor(sum / 10);
      result = (sum % 10) + result;
    }

    return result;
  }
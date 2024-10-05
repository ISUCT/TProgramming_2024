function add(a, b) {
  a = a.replace(/^0+/, '');
  b = b.replace(/^0+/, '');

  if (a === '') a = '0';
  if (b === '') b = '0';

  a = a.split('').reverse().join('');
  b = b.split('').reverse().join('');

  let result = [];
  let carry = 0;

  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    let digitA = i < a.length ? parseInt(a[i]) : 0;
    let digitB = i < b.length ? parseInt(b[i]) : 0;

    let sum = digitA + digitB + carry;
    carry = Math.floor(sum / 10);
    result.push(sum % 10);
  }

  if (carry > 0) {
    result.push(carry);
  }

  return result.reverse().join('');
}

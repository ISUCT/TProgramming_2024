function add(a, b) {
  if (a.length === 0) return b;
  if (b.length === 0) return a;

  while (a.length < b.length) a = '0' + a;
  while (b.length < a.length) b = '0' + b;

  let carry = 0;
  let result = '';

  for (let i = a.length - 1; i >= 0; i--) {
    const sum = parseInt(a[i]) + parseInt(b[i]) + carry;
    result = (sum % 10) + result;
    carry = Math.floor(sum / 10);
  }

  if (carry > 0) {
    result = carry + result;
  }

  return result;
}
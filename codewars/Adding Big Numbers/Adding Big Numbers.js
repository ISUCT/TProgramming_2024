function add(a, b) {
    let result = '';
    let carry = 0;
    let i = a.length - 1;
    let j = b.length - 1;
    while (i >= 0 || j >= 0 || carry > 0) {
        const digit1 = i >= 0 ? parseInt(a[i], 10) : 0;
        const digit2 = j >= 0 ? parseInt(b[j], 10) : 0;
        const sum = digit1 + digit2 + carry;
        carry = Math.floor(sum / 10);
        result += (sum % 10).toString();
        i--;
        j--;
    }
    return result.split('').reverse().join('');
}

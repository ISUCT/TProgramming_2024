function add(a, b) {
    let result = [];
    let carry = 0;
    let maxLength = Math.max(a.length, b.length);
    for (let i = 0; i < maxLength; i++) {
        let digitA = parseInt(a[a.length - i - 1], 10) || 0;
        let digitB = parseInt(b[b.length - i - 1], 10) || 0;
        let summ = digitA + digitB + carry;
        carry = Math.floor(summ / 10);
        result.push((summ % 10).toString());
    } 

    if (carry > 0) {
        result.push(carry.toString());
    }
    return result.reverse().join('');
}

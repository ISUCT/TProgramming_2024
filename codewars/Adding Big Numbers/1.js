function add(a, b) {
    const maxLength = Math.max(a.length, b.length);
    a = a.padStart(maxLength, '0');
    b = b.padStart(maxLength, '0');
    
    let carry = 0;
    let result = [];
    
    for (let i = maxLength - 1; i >= 0; i--) {
        const digitSum = parseInt(a[i]) + parseInt(b[i]) + carry;
        carry = Math.floor(digitSum / 10);
        result.push((digitSum % 10).toString());
    }
    
    if (carry > 0) {
        result.push(carry.toString());
    }
    
    result.reverse();
    
    return result.join('');
}

console.log(add("123", "321"));
console.log(add("11", "99"));
console.log(add("999", "1"));
console.log(add("123456789", "987654321"));
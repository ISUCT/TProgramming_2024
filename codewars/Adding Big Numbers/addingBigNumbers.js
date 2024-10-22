function add(a, b) {
    let result = '';
    let carry = 0;
    let i = a.length - 1;
    let j = b.length - 1;

    while (i >= 0 || j >= 0 || carry) {
        let sum = carry;
        if (i >= 0) sum += +a[i--];
        if (j >= 0) sum += +b[j--];
        result = (sum % 10) + result;
        carry = Math.floor(sum / 10);
    }

    return result;
}

console.log(add("123","321"));
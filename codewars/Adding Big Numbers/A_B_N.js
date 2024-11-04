function add(a, b) {
    while (a.length < b.length) a = '0' + a;
    while (b.length < a.length) b = '0' + b;

    let carry = 0;
    let result = '';

    for (let i = a.length - 1; i >= 0; i--) {
        let sum = parseInt(a[i]) + parseInt(b[i]) + carry;
        carry = Math.floor(sum / 10);
        result = (sum % 10) + result;
    }
    if (carry > 0) {
        result = carry + result;
    }

    return result;
}

let result = add("123313211341451513515", "3212341432142412431234124214");
console.log(result);
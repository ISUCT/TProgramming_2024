function add(num1, num2) {
    let result = '';
    let carry = 0;
    while (num1.length < num2.length) num1 = '0' + num1;
    while (num2.length < num1.length) num2 = '0' + num2;
    for (let i = num1.length - 1; i >= 0; i--) {
        let sum = parseInt(num1[i]) + parseInt(num2[i]) + carry;
        let digit = sum % 10;
        carry = Math.floor(sum / 10);
        result = digit + result;
    }
    if (carry > 0) {
        result = carry + result;
    }
    return result;
}

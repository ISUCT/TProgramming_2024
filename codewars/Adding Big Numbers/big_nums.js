function add(num1, num2) {
    num1 = num1.toString().replace(/^0+/, '');
    num2 = num2.toString().replace(/^0+/, '');
    while (num1.length < num2.length) {
        num1 = '0' + num1;
    }
    while (num2.length < num1.length) {
        num2 = '0' + num2;
    }
    let carry = 0;
    let result = '';
    for (let i = num1.length - 1; i >= 0; i--) {
        let digit1 = parseInt(num1[i]);
        let digit2 = parseInt(num2[i]);
        let sum = digit1 + digit2 + carry;
        if (sum >= 10) {
            carry = 1;
            sum -= 10;
        } else {
            carry = 0;
        }
        result = sum.toString() + result;
    }
    if (carry > 0) {
        result = carry.toString() + result;
    }
    return result;
}
function digitalRoot(n) {
    if (n.toString().length <= 1) {
        return n;
    } else {
        let digits = n.toString().split('').map(Number);
        let sumOfDigits = digits.reduce((acc, curr) => acc + curr, 0);
        return digitalRoot(sumOfDigits);
    }
}
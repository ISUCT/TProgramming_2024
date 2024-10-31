function add(a, b) {
    const aLen = a.length;
    const bLen = b.length;
    const maxLen = Math.max(aLen, bLen);

    let carry = 0, sum = '';

    for (let i = 1; i <= maxLen; i++) {
        let A = +a.charAt(aLen - i);
        let B = +b.charAt(bLen - i);

        let t = carry + A + B;
        carry = t / 10 | 0;
        t %= 10;

        sum = (i === maxLen && carry)
            ? carry * 10 + t + sum
            : t + sum;
    }

    return sum;
}

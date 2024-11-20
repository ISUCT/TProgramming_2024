function add(a, b) {
    while (a.length < b.length) a = '0' + a;
    while (b.length < a.length) b = '0' + b;
    let c = 0;
    let d = '';
    for (let i = a.length - 1; i >= 0; i--) {
        let sum = Number(a[i]) + Number(b[i]) + c;
        c = Math.floor(sum / 10);
        d = (sum % 10) + d;
    }
    if (c > 0) {
        d = c + d;
    }
    return d;
}
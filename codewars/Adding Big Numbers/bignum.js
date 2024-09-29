function add(a, b) {
    let total = '';
    let base = 0;
    let i = a.length - 1;
    let j = b.length - 1;
    while (i >= 0 || j >= 0 || base > 0) {
        const num1 = i >= 0 ? parseInt(a[i], 10) : 0;
        const num2 = j >= 0 ? parseInt(b[j], 10) : 0;
        const sum = num1 + num2 + base;
        base = Math.floor(sum / 10);
        total += (sum % 10).toString();
        i--;
        j--;
    }
    return total.split('').reverse().join('');
}
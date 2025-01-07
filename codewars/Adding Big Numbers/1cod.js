function addbignumbbnumb(a, b) {
    while (a.length < b.length) a = '0' + a;
    while (b.length < a.length) b = '0' + b;

    let carr = 0;
    let result = '';

    for (let i = a.length - 1; i >= 0; i--) {
        let sum = parseInt(a[i]) + parseInt(b[i]) + carr;
        carr = Math.floor(sum / 10);
        result = (sum % 10) + result;
    }
    if (carr > 0) {
        result = carr + result;
    }

    return result;
}

let result = addbignumbbnumb("12331321134145151351", "32123414321424124312341");
console.log(result);
function digitalRoot(n) {
    if (n.toString().length == 1) {
        return n;
    }
    let arr = n.toString().split('')
    let res = 0;
    for (i = 0; i < arr.length; i++) {
        arr[i] = +arr[i] | 0;
        res += arr[i];
    }
    return digitalRoot(res)
}
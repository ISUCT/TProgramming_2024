function mergeArrays(a, b) {
    c = [];
    max = a.length>b.length ? a.length : b.length;
    for (let i = 0; i<max; i++) {
        if (a[i] !== undefined) {
            c.push(a[i]);
        }
        if (b[i] !== undefined) {
            c.push(b[i]);
        }
    }
    return c;
}
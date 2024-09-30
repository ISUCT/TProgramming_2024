function ocou(c, arr) {
    for (let i of arr) {
        if (Array.isArray(i)) {
            c += 1;
            c = ocou(c, i);
        } else {
            c += 1;
        }
    }
    return c;
}

function deepCount(a) {
    let allc = 0;
    for (let i = 0; i < a.length; i++) {
        if (Array.isArray(a[i])) {
            allc += 1;
            allc = ocou(allc, a[i]);
        } else {
            allc += 1;
        }
    }
    return allc;
}
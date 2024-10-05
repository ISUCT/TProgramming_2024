function mergeArrays(a, b) {
    let result = [];
    let maxLength = Math.max(a.length, b.length);

    for (let i = 0; i < maxLength; i++) {
        if (i < a.length) {
            result.push(a[i]);
        }
        if (i < b.length) {
            result.push(b[i]);
        }
    }

    return result;
}

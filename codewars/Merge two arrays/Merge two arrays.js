function mergeArrays(a, b) {
    let [i1, i2] = [0,0];
    ans = [];
    while (i1 < a.length || i2 < b.length) {
        if (i1 < a.length && i2 < b.length) {
            ans.push(a[i1]);
            ans.push(b[i2]);
            i1++,i2++;
        } else if (i1 < a.length) {
            ans.push(a[i1]);
            i1++;
        } else {
            ans.push(b[i2]);
            i2++;
        }
    }
    return ans
}

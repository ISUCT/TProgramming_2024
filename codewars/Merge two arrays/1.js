function mergeArrays(a, b) {
    const result = [];
    const maxLength = Math.max(a.length, b.length);
    
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

console.log(mergeArrays(['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5]));
console.log(mergeArrays([1, 2, 3], ['a', 'b', 'c', 'd', 'e', 'f']));
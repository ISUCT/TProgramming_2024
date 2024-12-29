function deepCount(a) {
    let count = 0;
    for (let elem of a) {
        if (Array.isArray(elem)) {
            count += deepCount(elem);
        }
        count++;
    }
    return count;
}

console.log(deepCount([[], 1, 2, 3]));
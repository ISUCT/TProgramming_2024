function moveZeros(arr) {
    let a = [];
    let count = 0;
    for (let i of arr) {
        if (i !== 0) {
            a.push(i);
        } else {
            count += 1;
        }
    }
    a.push(...new Array(count).fill(0));
    return a;
}
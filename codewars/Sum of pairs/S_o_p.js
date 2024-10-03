function sumPairs(ints, s) {
    let seen = new Map();
    for (let i = 0; i < ints.length; i++) {
        let num = ints[i];
        let complement = s - num;
        if (seen.has(complement)) {
            return [complement, num];
        }
        seen.set(num, i);
    }
    return undefined;
}

let result = sumPairs([10, 5, 2, 3, 7, 5], 10);
console.log(result);
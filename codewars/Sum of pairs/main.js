function sumPairs(ints, s) {
    const seen = new Map();
    for (let i = 0; i < ints.length; i++) {
        const num = ints[i];
        const complement = s - num;
        if (seen.has(complement)) {
            return [complement, num];
        }
        seen.set(num, i);
    }
    return undefined;
}

function sumPairs(ints, s) {
    const pastValue = {};
    for (let i = 0; i < ints.length; i++) {
        const current = ints[i];
        const c = s - current;
        if (pastValue[c] !== undefined) {
            return [c, current];
        }
        pastValue[current] = i;
    }
    return undefined;
}
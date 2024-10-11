function sumPairs(ints, s) {
    const was = {};
    for (let i = 0; i < ints.length; i++) {
        const current = ints[i];
        const complement = s - current;
        if (was[complement] !== undefined) {
            return [complement, current];
        }
        was[current] = i;
    }
    return undefined;
}
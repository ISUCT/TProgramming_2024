function sumPairs(ints, s) {
    const seen = {};
    for (let i = 0; i < ints.length; i++) {
        const currentNum = ints[i];
        const complement = s - currentNum;
        if (seen[complement] !== undefined) {
            return [complement, currentNum];
        }
        seen[currentNum] = i;
    }
    return undefined
}
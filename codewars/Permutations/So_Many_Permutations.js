function permutations(input) {
    if (input.length === 1) return [input];
    const res = [];
    for (let i = 0; i < input.length; i++) {
        const currentChar = input[i];
        if (input.indexOf(currentChar) === i) {
            const remainingChars = input.slice(0, i) + input.slice(i + 1);
            res.push(...permutations(remainingChars).map(perm => currentChar + perm));
        }}
    return res;
}
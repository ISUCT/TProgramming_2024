function permutat(str) {
    if (str.length <= 1) {
        return [str];
    }

    const resultSet = new Set();

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const remainingChars = str.slice(0, i) + str.slice(i + 1);
        const remainingPermutations = permutat(remainingChars);

        for (const perm of remainingPermutations) {
            resultSet.add(char + perm);
        }
    }

    return Array.from(resultSet);
}

const input = "aabb";
const permutationsut = permutat(input);

const formattedOutput = permutationsut.map(permutations => `'${permutations}'`);

console.log(`[${formattedOutput.join(', ')}]`);
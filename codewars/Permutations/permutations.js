function permutations(string) {
    if (string.length === 1) {
        return [string];
    }   
    let result = new Set();
    for (let i = 0; i < string.length; i++) {
        let remainingChars = string.slice(0, i) + string.slice(i + 1);
        let permOfRemainingChars = permutations(remainingChars);
        for (let permutation of permOfRemainingChars) {
            result.add(string[i] + permutation);
        }
    }
	return Array.from(result);
}
console.log(permutations('abc'));
function permutations(string) {
    const result = new Set();

    function backtrack(path, remaining) {
        if (remaining.length === 0) {
            result.add(path);
            return;
        }
        for (let i = 0; i < remaining.length; i++) {
            const nextPath = path + remaining[i];
            const nextRemaining = remaining.slice(0, i) + remaining.slice(i + 1);
            backtrack(nextPath, nextRemaining);
        }
    }

    backtrack('', string);
    return Array.from(result);
 }
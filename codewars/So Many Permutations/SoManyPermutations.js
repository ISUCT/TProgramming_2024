function permutations(s) {
    const answer = new Set(permute([...s]).map(p => p.join('')));
    return [...answer];
}

function permute(arr) {
    if (arr.length === 0) {
        return [[]];
    }
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        const rest = arr.slice(0, i).concat(arr.slice(i + 1));
        const subPerms = permute(rest);
        for (const j of subPerms) {
            res.push([arr[i], ...j]);
        }
    }
    return res;
};

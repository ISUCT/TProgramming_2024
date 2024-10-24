function permutations(s) {
    const permute = (arr) => {
        if (arr.length === 0) return [[]];
        const res = [];
        for (let i = 0; i < arr.length; i++) {
            const rest = arr.slice(0, i).concat(arr.slice(i + 1));
            const subPerms = permute(rest);
            for (const perm of subPerms) {
                res.push([arr[i], ...perm]);
            }
        }
        return res;
    };
    const uniquePerms = new Set(permute([...s]).map(p => p.join('')));
    return [...uniquePerms];
}
console.log(permutations("abc"));
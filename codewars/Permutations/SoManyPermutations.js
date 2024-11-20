function permutations(string) {
    function perm(arr, n, res) {
        if (n === 1) {
            res.add(arr.join(''));
        } else {
            for (let i = 0; i < n; i++) {
                perm(arr, n - 1, res);
                if (n % 2 === 0) {
                    [arr[i], arr[n - 1]] = [arr[n - 1], arr[i]];
                } else {
                    [arr[0], arr[n - 1]] = [arr[n - 1], arr[0]];
                }
            }
        }
    }
    let a = new Set();
    let b = string.split('');
    perm(b, b.length, a);
    return Array.from(a);
}
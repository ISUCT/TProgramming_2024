function deepCount(a) {
    let b = 0;
    function Counter(c) {
        for(let i of c) {
            b++;
            if (Array.isArray(i)) {
                Counter(i);
            }
        }
    }
    Counter(a);
    return b;
}
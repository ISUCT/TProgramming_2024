export const digitalRoot = (n: number): number => {
    while (n>9) {
        let a: string = n.toString();
        n = 0;
        for (let i of a) {
            n += Number(i);
        }
    }
    return n;
};
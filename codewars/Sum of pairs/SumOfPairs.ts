export function sumPairs(ints: number[], s: number): [number, number] | void {
    const a = new Map<number, number>();
    for (let i: number = 0; i < ints.length; i++) {
        const n: number = ints[i];
        const c: number = s - n;
        if (a.has(c)) {
            return [c, n];
        }
        a.set(n, i);
    }
    return undefined;
}
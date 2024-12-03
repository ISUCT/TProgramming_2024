export function sumPairs(ints: number[], sum: number): [number, number] | undefined {
    const seen = new Set<number>();
    for (const num of ints) {
        const complement = sum - num;
        if (seen.has(complement)) {
            return [complement, num];
        }
        seen.add(num);
    }
    return undefined;
}
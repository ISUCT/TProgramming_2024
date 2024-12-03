export function sumOfIntervals(intervals: [number, number][]): number {
    intervals.sort((a, b) => a[0] - b[0]);
    let totalLength = 0;
    let lastEnd = -Infinity;
    for (const [start, end] of intervals) {
        if (start > lastEnd) {
            totalLength += end - start;
        } else if (end > lastEnd) {
            totalLength += end - lastEnd;
        }
        lastEnd = Math.max(lastEnd, end);
    }
    return totalLength;
}
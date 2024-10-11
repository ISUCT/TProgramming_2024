function sumIntervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let merged = [];
    let current = intervals[0];
    for (let i = 1; i < intervals.length; i++) {
        let next = intervals[i];
        if (current[1] >= next[0]) {
            current[1] = Math.max(current[1], next[1]);
        } else {
            merged.push(current);
            current = next;
        }
    }
    merged.push(current);
    let total = merged.reduce((sum, interval) => sum + (interval[1] - interval[0]), 0);
    return total;
}
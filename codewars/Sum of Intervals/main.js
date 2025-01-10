function sumIntervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let letmerge = [];
    let currentInterval = intervals[0];
    for (let i = 1; i < intervals.length; i++) {
        let next = intervals[i];
        if (currentInterval[1] >= next[0]) {
            currentInterval[1] = Math.max(currentInterval[1], next[1]);
        } else {
            letmerge.push(currentInterval);
            currentInterval = next;
        }
    }
    letmerge.push(currentInterval);
    let output = letmerge.reduce((sum, interval) => sum + (interval[1] - interval[0]), 0);
    return output;
}
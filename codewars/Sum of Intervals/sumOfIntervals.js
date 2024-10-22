function sumIntervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let mergedIntervals = [];
    let currentInterval = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        let nextInterval = intervals[i];
        if (currentInterval[1] >= nextInterval[0]) {
            currentInterval[1] = Math.max(currentInterval[1], nextInterval[1]);
        } else {
            mergedIntervals.push(currentInterval);
            currentInterval = nextInterval;
        }
    }

    mergedIntervals.push(currentInterval);
    let totalLength = mergedIntervals.reduce((sum, interval) => sum + (interval[1] - interval[0]), 0);

    return totalLength;
}

console.log(sumIntervals([[1, 4], [7, 10], [3, 5]]));
console.log(sumIntervals([[1, 5], [10, 20], [1, 6], [16, 19], [5, 11]]));
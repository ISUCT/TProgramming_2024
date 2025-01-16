function sumIntervals(intervals) {
    const compareSort = (a, b) => a[0] - b[0];
    intervals.sort(compareSort);
    let prev;
    let intervalsTwo = [];
    intervalsTwo.push(intervals[0]);
    let ans = 0;
    for (let cur of intervals) {
        prev = intervalsTwo[intervalsTwo.length - 1];
        if (cur[0] <= prev[1]) {
            prev[1] = Math.max(prev[1], cur[1]);
        } else {
            intervalsTwo.push(cur);
        }
    }
    for (i of intervalsTwo) {
        ans += i[1] - i[0];
    }
    return ans
}
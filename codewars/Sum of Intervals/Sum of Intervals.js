function sumIntervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let ans = 0;
    let intervalsListed = intervals.map(x => [...x]);
    let intervalsTwo = [intervalsListed[0]];
    
    for (let cur of intervalsListed) {
        let prev = intervalsTwo[intervalsTwo.length - 1];
        if (cur[0] <= prev[1]) {
            prev[1] = Math.max(prev[1], cur[1]);
        } else {
            intervalsTwo.push(cur);
        }
    }
    
    for (let i of intervalsTwo) {
        ans += i[1] - i[0];
    }
    
    return ans;
}

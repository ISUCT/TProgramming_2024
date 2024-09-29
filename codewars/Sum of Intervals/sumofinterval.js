function sumIntervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let total = 0;
    let intervalsListed = intervals.map(x => [...x]);
    let intervalSecond = [intervalsListed[0]];
    
    for (let cur of intervalsListed) {
        let prev = intervalSecond[intervalSecond.length - 1];
        if (cur[0] <= prev[1]) {
            prev[1] = Math.max(prev[1], cur[1]);
        } else {
            intervalSecond.push(cur);
        }
    }
    
    for (let i of intervalSecond) {
        total += i[1] - i[0];
    }
    
    return total;
}
function sumIntervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    let answer = 0;
    let trueEnd = -1000000000;
    for (const [start, end] of intervals) {
        if (start <= trueEnd && end >= trueEnd) {
            answer += end - trueEnd;
            trueEnd = Math.max(trueEnd, end);
        } else if (end < trueEnd) {
            continue;
        } else {
            answer += end - start;
            trueEnd = end;
        }
    }
    return answer;
}

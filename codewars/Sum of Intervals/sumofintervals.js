function sumIntervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let sum = 0;
    let currEnd = -Infinity;
    
    for(const [start, end] of intervals){
    if (start <= currEnd && end >= currEnd){
    sum += end - currEnd
      currEnd = Math.max(currEnd, end);
      } else if (end < currEnd){
      continue;
      } else {
      sum += end - start;
      currEnd = end;
      }
    }
    return sum;
  }
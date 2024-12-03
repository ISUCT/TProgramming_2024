function sumIntervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
  
    let sum = 0;
    let currentEnd = -Infinity;
  
    for (const [start, end] of intervals) {
      if (start > currentEnd) {
        sum += end - start;
      } else if (end > currentEnd) {
        sum += end - currentEnd;
      }
      currentEnd = Math.max(currentEnd, end);
    }
  
    return sum;
  }
  
function sumIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let sum = 0;
  let currentEnd = -Infinity;

  for (const [start, end] of intervals) {
    if (start <= currentEnd && end >= currentEnd) {
      sum += end - currentEnd;
      currentEnd = Math.max(currentEnd, end);
    } else if (end < currentEnd) {
      continue;
    } else {
      sum += end - start;
      currentEnd = end;
    }
  }

  return sum;
}

function sumIntervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let mergedIntervals = [intervals[0]];
  
    for (let i = 1; i < intervals.length; i++) {
      let lastInterval = mergedIntervals[mergedIntervals.length - 1];
  
      if (intervals[i][0] <= lastInterval[1]) {
        lastInterval[1] = Math.max(lastInterval[1], intervals[i][1]);
      } else {
        mergedIntervals.push(intervals[i]);
      }
    }
  
    let totalLength = 0;
    for (let interval of mergedIntervals) {
      totalLength += interval[1] - interval[0];
    }
  
    return totalLength;
  }
function sumIntervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
  
    let sum = 0;
    let End = Number;
  
    for (const [start, finish] of intervals) {
      if (start <= End && finish >= End) {
        sum += finish - End;
        if (End < finish) {
          End = finish;
        }
      } else if (End > finish) {
        continue;
      } else {
        sum += finish - start;
        End = finish;
      }
    }
  
    return sum;
  } 
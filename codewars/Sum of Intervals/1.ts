export function sumOfIntervals(intervals: [number, number][]) {
    let res: number = 0;
    for(let i = 0; i < intervals.length - 1; i++) {
      for(let j = i + 1; j < intervals.length; j++) {
        if(intervals[i][1] > intervals[j][0] && intervals[i][0] < intervals[j][1]) {
          let newIntStart: number = Math.min(intervals[i][0], intervals[j][0]);
          let newIntEnd: number = Math.max(intervals[i][1], intervals[j][1]);
          intervals[i][0] = newIntStart;
          intervals[i][1] = newIntEnd;
          intervals.splice(j, 1);
          j = i;
        }
      }
    }
    
    for(let i = 0; i < intervals.length; i++) {
      res += intervals[i][1] - intervals[i][0];
    }
    return res;
  }
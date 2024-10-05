using System;
using System.Linq;

public class Intervals
{
    public static int SumIntervals((int, int)[] intervals)
    {
        (int, int)[] sortedIntervals = intervals.OrderBy((x) => x.Item1).ToArray();
        (int, int)[] unitedIntervals = new (int, int)[sortedIntervals.Length];
        bool[] touchedIntervals = new bool[sortedIntervals.Length];
        int top = 0;
      
#region STAGE_1
        
        for(int x  = 0; x < sortedIntervals.Length; ++x) {
          if(touchedIntervals[x])
            continue; // Skip touched intervals.
          unitedIntervals[top] = sortedIntervals[x];
          for(int y = x + 1; y < sortedIntervals.Length; ++y) {
            if(touchedIntervals[y])
              continue; // Skip touched intervals.
            
            (int l1, int r1) = unitedIntervals[top];
            (int l2, int r2) = sortedIntervals[y];
            
            // Check for overlapping
            if(r1 >= l2 && l1 <= r2) {
              // Unite overlapped regions.
              // Expand first one.
              if(unitedIntervals[top].Item2 < sortedIntervals[y].Item2)
                unitedIntervals[top].Item2 = sortedIntervals[y].Item2;
              touchedIntervals[y] = true;
            }
          }
          top++;
        }

#endregion // STAGE_1
      
#region STAGE_2
  
        // Finally, sum ranges.
        // Actually we can sum it all in previous stage but I want this code clean.
        int accumulator = 0;
        for(int i = 0; i < top; ++i) {
          (int l, int r) = unitedIntervals[i];
          accumulator += r - l;
        }
      
#endregion // STAGE_2
  
        return accumulator;
    }
}
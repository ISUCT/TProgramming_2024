def sum_of_intervals(intervals):
    intervals = sorted(intervals)
    merged = [intervals[0]]
    
    for interval in intervals[1:]:
        if interval[0] <= merged[-1][1]:
            merged[-1] = (merged[-1][0], max(merged[-1][1], interval[1]))
        else:
            merged.append(interval)
    
    return sum(end - start for start, end in merged)

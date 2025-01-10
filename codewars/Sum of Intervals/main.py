def sum_of_intervals(intervals):
    if not intervals:
        return 0
    intervals.sort(key=lambda x: x[0])
    merged_intervals = []
    current_start, current_end = intervals[0]
    for start, end in intervals[1:]:
        if start <= current_end:
            current_end = max(current_end, end)
        else:
            merged_intervals.append((current_start, current_end))
            current_start, current_end = start, end
    merged_intervals.append((current_start, current_end))
    total_length = sum(end - start for start, end in merged_intervals)

    return total_length
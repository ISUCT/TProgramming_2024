def sum_of_intervals(intervals):
    if not intervals:
        return 0
    
    intervals.sort(key=lambda x: x[0])
    
    merged_intervals = [intervals[0]]
    
    for current in intervals[1:]:
        previous = merged_intervals[-1]
        
        if current[0] <= previous[1]:
            merged_intervals[-1] = [previous[0], max(previous[1], current[1])]
        else:
            merged_intervals.append(current)
    
    total_length = sum(end - start for start, end in merged_intervals)
    
    return total_length

print(sum_of_intervals([
   [1, 2],
   [6, 10],
   [11, 15]
]))

print(sum_of_intervals([
   [1, 4],
   [7, 10],
   [3, 5]
]))
print(sum_of_intervals([
   [1, 5],
   [10, 20],
   [1, 6],
   [16, 19],
   [5, 11]
]))
print(sum_of_intervals([
   [0, 20],
   [-100000000, 10],
   [30, 40]
]))
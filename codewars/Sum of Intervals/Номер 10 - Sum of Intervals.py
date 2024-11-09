def sum_of_intervals(intervals):
    sum_intervals = 0
    intervals = sorted(intervals, key=lambda x: x[0])
    interval_arr = []
    for i in intervals:
        if not interval_arr or interval_arr[-1][1] < i[0]:
            interval_arr.append([i[0], i[1]])
        else:
            if interval_arr[-1][1] < i[1]:
                interval_arr[-1][1] = i[1]
    for i in interval_arr:
        sum_intervals += i[1] - i[0]
    return sum_intervals
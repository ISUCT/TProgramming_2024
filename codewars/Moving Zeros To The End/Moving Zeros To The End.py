def move_zeros(lst):
    slow = 0
    for fast in range(len(lst)):
        if lst[fast] != 0:
            lst[slow], lst[fast] = lst[fast], lst[slow]
            slow += 1
    return lst
print(move_zeros([1, 0, 1, 2, 0, 1, 3]))

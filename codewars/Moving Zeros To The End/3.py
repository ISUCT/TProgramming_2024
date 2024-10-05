def move_zeros(lst):
    a = []
    count = 0
    for i in lst:
        if i != 0:
            a.append(i)
        else:
            count += 1
    a.extend([0]*count)
    return a

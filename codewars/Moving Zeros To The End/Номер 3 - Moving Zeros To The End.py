def move_zeros(lst):
    arr_no_zero = []
    arr_zero = []
    for i in lst:
        if i == 0:
            arr_zero.append(i)
        else:
            arr_no_zero.append(i)
    return arr_no_zero + arr_zero
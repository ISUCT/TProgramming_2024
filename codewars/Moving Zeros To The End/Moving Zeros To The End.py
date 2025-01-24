def move_zeros(lst):

    non_zeros = [x for x in lst if x != 0]
    
    zero_count = len(lst) - len(non_zeros)
    
    lst = non_zeros + [0] * zero_count
    return lst
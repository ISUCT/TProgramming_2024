def move_zeros(lst):
    non_zeros = [x for x in lst if x != 0]
    zero_count = lst.count(0)   
    result = non_zeros + [0] * zero_count    
    return result
print(move_zeros([1, 0, 1, 2, 0, 1, 3]))
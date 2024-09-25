def move_zeros(lst):
    result = []
    
    zero_count = 0
    
    for x in lst:
        if x == 0:
            zero_count += 1
        else:
            result.append(x)
            
    for _ in range(zero_count):
        result.append(0)
        
    return result
      
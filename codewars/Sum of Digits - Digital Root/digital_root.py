def digital_root(n):
    str_n = str(n)
    result = 0
    for char in str_n:
        num = int(char)
        result += num
    
    str_result = str(result)
    if len(str_result) >= 2:
        return digital_root(str_result)
    
    return result   
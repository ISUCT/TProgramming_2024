def deep_count(arr):
    count = 0
    
    for element in arr:
        count += 1
        if isinstance(element, list):
            count += deep_count(element)
    
    return count

def deep_count(a):
    count = 0
    for element in a:
        if isinstance(element, list):
            count += deep_count(element)
        count += 1
    return count
